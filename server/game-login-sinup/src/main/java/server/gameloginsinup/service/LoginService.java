package server.gameloginsinup.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import server.gameloginsinup.dao.UserDao;

import server.gameloginsinup.entity.UserTable;
import server.gameloginsinup.pages.JwtResponsePage;
import server.gameloginsinup.pages.LoginPage;

import server.gameloginsinup.util.JwtUtil;

@Service
public class LoginService implements UserDetailsService{

    @Autowired
    private UserDao userDao;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    public JwtResponsePage findUser(LoginPage user) throws Exception{

        String email = user.getEmail();
        String password = user.getPassword();
        authenticate(email,password);

        UserDetails userDetails = loadUserByUsername(email);
        String newGeneratedToken = jwtUtil.generateToken(userDetails);


        UserTable User = userDao.findByEmail(email);

        return new JwtResponsePage(newGeneratedToken,User);
    }

    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        UserTable user = userDao.findByEmail(email);
        // String password = user.getPassword();
        if (user != null) {
            return new org.springframework.security.core.userdetails.User(
                   user.getEmail(),
                    user.getPassword(),
                    getAuthority(user)

                );
        }
        return  null;
    }


    private Set<SimpleGrantedAuthority> getAuthority(UserTable user) {
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();

        user.getEntity().forEach(data->{
            authorities.add(new SimpleGrantedAuthority(data.getRole_name()));
        });
        return authorities;
    }

    private void authenticate(String email, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}
