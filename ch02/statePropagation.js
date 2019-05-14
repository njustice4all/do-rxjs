//
class User {
  constructor() {
    this._state = {
      name: 'rxjs',
      isLogin: false,
    };
  }

  getName() {
    return this._state.name;
  }

  isLogin() {
    return this._state.isLogin;
  }

  login(name) {
    this._state.name = name;
    this._state.isLogin = true;
  }

  logout() {
    this._state.name = '';
    this._state.isLogin = false;
  }
}

class System {
  constructor(user) {
    this._token = null;
    this._id = 'System';
    this._user = user;
  }

  check() {
    const username = this._user.getName();
    if (this._user.isLogin()) {
      this._token = [...username].reduce((acc, v) => acc + v.charCodeAt(0), 0);
      console.log(`[${this._id}] ${username} 의 토큰은 ${this._token} 입니다.`);
    } else {
      this._token = null;
      console.log(`[${this._id}] 로그인 되지 않았습니다.`);
    }
  }
}

const user = new User();
const system = new System(user);

system.check();

user.login('Youngjoo');

system.check();

user.logout();

system.check();
