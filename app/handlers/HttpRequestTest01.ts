// 该案例为：Ajax库的封装
// 封装一个XMLHttpRequest 对象
// 1. 封装一个get请求
class SimpleHttp {
  private http: XMLHttpRequest;
  constructor() {
    this.http = new XMLHttpRequest();
  }
  // Make a get request
  public get(url: string, callback:(err:string | null, res?: string) => void): void {
    this.http.open('GET', url, true);
    this.http.onload = () => {
      if (this.http.status === 200) {
        callback(null, this.http.responseText)
      } else {
        callback(`Error: ${this.http.status}`);
      }
    }
  }
}

export default SimpleHttp;