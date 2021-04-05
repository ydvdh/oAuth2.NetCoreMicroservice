import { Injectable } from '@angular/core';
import { User, UserManager } from 'oidc-client';
import { Subject } from 'rxjs';
import { Constants } from '../constants';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _userManager: UserManager;
  private _user: User;
  private _loginChangedSubject = new Subject<boolean>();

  loginChanged = this._loginChangedSubject.asObservable();

  constructor() {
    const stsSettings = {
      authority: Constants.stsAuthority,
      client_id: Constants.clientId,
      client_secret: "secret",
      redirect_uri: `${Constants.clientRoot}signin-callback`,
      post_logout_redirect_uri: `${Constants.clientRoot}signout-callback`,
      response_type: "code",
      scope: "openid profile movieAPI"
    };
    this._userManager = new UserManager(stsSettings);
  }

  login() {
    return this._userManager.signinRedirect();
  }

  isLoggedIn(): Promise<boolean> {
    return this._userManager.getUser().then(user => {
      const currentUser = !!user && !user.expired;
      if (this._user !== user) {
        this._loginChangedSubject.next(currentUser);
      }
      this._user = user;
      return currentUser;
    });
  }

  completeLogin() {
    return this._userManager.signinRedirectCallback().then(user => {
      this._user = user;
      this._loginChangedSubject.next(!!user && !user.expired);
      return user;
    });
  }

  logout() {
    return this._userManager.signoutRedirect();
  }

  completeLogout() {
    this._user = null;
    return this._userManager.signoutRedirectCallback();
  }

  getAccessToken() {
    return this._userManager.getUser().then(user => {
      if (!!user && !user.expired) {
        return user.access_token;
      } else {
        return null;
      }
    });
  }
}

