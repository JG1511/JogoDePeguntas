import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage : Storage;

  constructor() { 
    this.storage = window.localStorage;
  }

  setLocalStorage(token: string, user: any) {
    if(this.storage ) {
      this.storage.setItem('token', token);
      this.storage.setItem('user', JSON.stringify(user));
      return true;
    }
    return false;
  }  

  getLocalStorage(token: string) {
  if(this.storage){
    const item = this.storage.getItem(token);
    return item ? JSON.parse(item) : null;
  }
  return null;
  }

  removeLocalStorage(token: string) {
    if(this.storage) {
      this.storage.removeItem(token);
    }
  }
  clearLocalStorage() {
    if(this.storage) {
      this.storage.clear();
    }
  }
}
