import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
constructor(private router:Router) {}
login(role: string, userData: any) {
  sessionStorage.setItem('role', role);
  sessionStorage.setItem('userData', JSON.stringify(userData));
}

clearSession() {
  // Clear authentication tokens, user data, etc.
  localStorage.removeItem('authToken');
  localStorage.removeItem('userData');
  this.router.navigate(['/login'], { replaceUrl: true });
}
isAuthenticated(): boolean {
  return !!sessionStorage.getItem('userData');
}
getRole(): string | null {
  return sessionStorage.getItem('role');
}
}
