import Works from './Cards/Works';
import { projects } from './Cards/constants';
import Search from './Search/Search';
const Dashboard = () => {
    return (
        <div>
            <Search/>
            <Works data={projects}/>
        </div>
    )
}

export default Dashboard