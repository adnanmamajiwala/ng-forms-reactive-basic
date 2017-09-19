import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

export class CustomValidators {

  static invalidProjectName(control): { [s: string]: boolean } {
    if (control.value === 'test' || control.value === 'Test') {
      return {'forbiddenProjectName': true};
    }
  }

  static forbiddenProjectName(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value === 'test' || control.value === 'Test') {
          resolve({'forbiddenProjectName': true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
