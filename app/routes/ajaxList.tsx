import React, { useState, useEffect } from 'react';

// import SimpleHttp from '~/handlers/HttpRequestTest01';

const AjaxList:React.FC = () => {
// 此处使用ajax get 请求数据
  const [data, setData] = useState([]);
  const lHttp = new SimpleHttp();
  useEffect(() => {
    // const lHttp = SimpleHttp();
    lHttp.get('https://jsonplaceholder.typicode.com/posts', (err:string | null, res?: string) => {
      if (!err && res) {
        res.json().then((res) => {
          setData(res);
        })
      } else {
        console.log(`ERROR: ${err}`);
      }
    })
  });

  return <div className='g-container'>
    <h2 className='g-h2'>
      <i className='icon-certificate' />
      <b className='g-h2-name'>AJAX Test</b>
      <span className='g-h2-name-cn'>AJAX 练习案例</span>
    </h2>
    <div className='g-main'>
      export default AjaxList;
    </div>
  </div>
};

export default AjaxList;