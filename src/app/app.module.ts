import { FlexLayoutModule } from '@angular/flex-layout';
import { CheckboxComponent } from './components/core/dynamicform/form-components/checkbox/checkbox.component';
import { RadiobuttonComponent } from './components/core/dynamicform/form-components/radiobutton/radiobutton.component';
import { DateComponent } from './components/core/dynamicform/form-components/date/date.component';
import { SelectComponent } from './components/core/dynamicform/form-components/select/select.component';
import { ButtonComponent } from './components/core/dynamicform/form-components/button/button.component';
import { InputComponent } from './components/core/dynamicform/form-components/input/input.component';

import { monospaceTheme } from './components/core/theme/fontfamily-monospace';
import { fantasyTheme } from './components/core/theme/fontfamily-fantasy';
import { mediumFonts } from './components/core/theme/font-medium';
// import { lightTheme } from './components/core/theme/light-theme';
// import { ThemeModule } from './components/core/theme/theme.module';
import { AlertComponent } from './components/core/alert-router/alert/alert.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomModule } from './components/custom/custom.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatComponentModule } from './mat-component.module';

import { AuthGuardService } from './service/auth/auth-guard.service';
import { AuthService } from './service/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import {
  ThemeModule, lightTheme, darkTheme, reddTheme, smallFonts, largeFonts, cursiveTheme,
  sansTheme, romanTheme, purpleTheme, greenTheme, brownTheme
} from './components/core/theme';
import { AlertService } from './service/alert/alert.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent
  ],
  entryComponents: [
    AlertComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatComponentModule,
    HttpClientModule,
    CustomModule,
    FlexLayoutModule,
    CustomModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme, reddTheme, smallFonts, largeFonts, mediumFonts, cursiveTheme, fantasyTheme,
        monospaceTheme, sansTheme, romanTheme, purpleTheme, greenTheme, brownTheme],
      active: 'light'
    })
  ],
  providers: [AuthService,
    AuthGuardService,
    AlertService,
    { provide: AlertService, useClass: AlertService },
    // { provide: DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

