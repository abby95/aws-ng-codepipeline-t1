import { CanActivateFn } from '@angular/router';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  let role = sessionStorage.getItem("role")
  if(role==="admin"){
    window.alert("You are not authorized to access this page")
    return true
  }
  return false;
};
