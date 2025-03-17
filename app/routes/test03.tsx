// 实现一个useThrottle React Hook，要求其可接受一个Function函数和最短触发事件阈值Span，使得该函数在每次调用后的Span时间区间内不再触发重新调用
// function Button() {
//   const onClick = (_e) => console.log('Clicked');
//   const throttleClick = useThrottle(onClick, 1e3);
//   return <div onClick={throttleClick}></div>;
// }

