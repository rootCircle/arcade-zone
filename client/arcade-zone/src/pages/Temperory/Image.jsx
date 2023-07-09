import React, { useEffect, useRef } from 'react';

const FireflyCanvas = () => {
  const canvasRef = useRef(null);
  const f = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const init = () => {
      context.fillStyle = 'rgba(30,30,30,1)';
      context.fillRect(0, 0, width, height);
    };

    const Firefly = () => {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.s = Math.random() * 2;
      this.ang = Math.random() * 2 * Math.PI;
      this.v = (this.s * this.s) / 4;
    };

    Firefly.prototype.move = function () {
      this.x += this.v * Math.cos(this.ang);
      this.y += this.v * Math.sin(this.ang);
      this.ang += (Math.random() * 20 * Math.PI) / 180 - (10 * Math.PI) / 180;
    };

    Firefly.prototype.show = function () {
      context.beginPath();
      context.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
      context.fillStyle = '#fddba3';
      context.fill();
    };

    const draw = () => {
      if (f.length < 100) {
        for (let j = 0; j < 10; j++) {
          f.push(new Firefly());
        }
      }

      context.clearRect(0, 0, width, height);

      for (let i = 0; i < f.length; i++) {
        f[i].move();
        f[i].show();
        if (f[i].x < 0 || f[i].x > width || f[i].y < 0 || f[i].y > height) {
          f.splice(i, 1);
        }
      }
    };

    const mouse = {};
    const lastMouse = {};

    const handleMouseMove = (e) => {
      lastMouse.x = mouse.x;
      lastMouse.y = mouse.y;

      mouse.x = e.pageX - canvas.offsetLeft;
      mouse.y = e.pageY - canvas.offsetTop;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    canvas.addEventListener('mousemove', handleMouseMove, false);
    window.addEventListener('resize', handleResize);

    const loop = () => {
      requestAnimationFrame(loop);
      draw();
    };

    init();
    loop();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default FireflyCanvas;