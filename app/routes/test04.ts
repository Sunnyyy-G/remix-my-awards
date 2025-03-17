function test(v1, v2) {
    let x = Number(v1.split('.').toString());
    let y = Number(v2.split('.').toString());
    if(v1.split('.').length = v2.split('.').length) {
        if(x> y) {
        return 1;
        } else if(x < y) {
        return -1;
        } else {
        return 0;
        }
    }
  };
