import { LoginComponent } from './../../login/view/login.component';
import { darkTheme } from './../../theme/theme-dark';
import { mediumFonts } from './../../theme/font-medium';
import { largeFonts } from './../../theme/font-large';

import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from 'src/app/service/auth/auth.service';
import { ThemeService } from '../../theme';
import { ThemeeService } from 'src/app/service/theme/themee.service';
import { Themess } from 'src/app/dto/themes';
import { MatDialog } from '@angular/material';
import { AlertComponent } from '../../alert-router/alert/alert.component';

@Component({
  selector: 'app-template-v1',
  templateUrl: './template-v1.component.html',
  styleUrls: ['./template-v1.component.css']
})
export class TemplateV1Component implements OnInit {

  themessdto: Themess = new Themess();
  menuContent = '';
  selectedtheme = 'light';
  selectedfontsize = 'medium';
  selectedfontfamily = 'cursive';
  tokenset = '';
  themedataa: any;
  alerttypee = '';
  fristparam = '';
  secontparam = '';
  panelOpenState = false;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private authService: AuthService,
    private themeService: ThemeService, private themeservisedb: ThemeeService,
    private dialog: MatDialog) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    // this.getDefTheme();
  }



  ngOnInit() {
  }

  openDialog(alertype, fristvaluee, secondvalue) {
    this.dialog.open(AlertComponent, {
      data: { alertype: alertype, fristvalue: fristvaluee, secondvalue: secondvalue },
      panelClass: 'custom-dialog-container'
    })
      .afterClosed()
      .subscribe(result => console.log(result));
  }

  themeToggle() {
    const active = this.themeService.setTheme(this.selectedtheme);
  }


  fontsToggle() {
    const active = this.themeService.setTheme(this.selectedfontsize);
  }

  fontFamilyToggle() {
    const active = this.themeService.setTheme(this.selectedfontfamily);
  }

  setdefaulttheme() {
    this.selectedtheme = 'light';
    this.selectedfontsize = 'medium';
    this.selectedfontfamily = 'cursive';
  }

  // getDefTheme() {

  //   // this.tokenset = sessionStorage.getItem('token');
  //   this.tokenset = '7';
  //   this.themeservisedb.defuserthemes(this.tokenset).subscribe(
  //     (result) => {
  //       // this.themedataa = result;
  //       console.log(result);
  //       console.log(result.font['fontsizeeight']);

  //       // this.themessdto.Fontsizefive = result.Fontsizefive;

  //       this.themessdto.Fontsizefive = result.font['fontsizefive'];
  //       this.themessdto.Fontsizesix = result.font['fontsizesix'];
  //       this.themessdto.Fontsizeseven = result.font['fontsizeseven'];
  //       this.themessdto.Fontsizeeight = result.font['fontsizeeight'];
  //       this.themessdto.Fontsizenine = result.font['fontsizenine'];
  //       this.themessdto.Fontsizeten = result.font['fontsizeten'];

  //       this.themessdto.Fontsizeeleven = result.font['fontsizeeleven'];
  //       this.themessdto.Fontsizetwel = result.font['fontsizetwel'];
  //       this.themessdto.Fontsizethirteen = result.font['fontsizethirteen'];
  //       this.themessdto.Fontsizefourteen = result.font['fontsizefourteen'];
  //       this.themessdto.Fontsizefifteen = result.font['fontsizefifteen'];
  //       this.themessdto.Fontsizesixteen = result.font['fontsizesixteen'];
  //       this.themessdto.Fontsizeseventeen = result.font['fontsizeseventeen'];
  //       this.themessdto.Fontsizeeighteen = result.font['fontsizeeighteen'];
  //       this.themessdto.Fontsizenineteen = result.font['fontsizenineteen'];
  //       this.themessdto.Fontsizetwnty = result.font['fontsizetwnty'];

  //       this.themessdto.Fontsizetwntyone = result.font['fontsizetwntyone'];
  //       this.themessdto.Fontsizetwntytwo = result.font['fontsizetwntytwo'];
  //       this.themessdto.Fontsizetwntythree = result.font['fontsizetwntythree'];
  //       this.themessdto.Fontsizetwntyfoure = result.font['fontsizetwntyfoure'];
  //       this.themessdto.Fontsizetwntyfive = result.font['fontsizetwntyfive'];
  //       this.themessdto.Fontsizetwntysix = result.font['fontsizetwntysix'];
  //       this.themessdto.Fontsizetwntyseven = result.font['fontsizetwntyseven'];
  //       this.themessdto.Fontsizetwntyeight = result.font['fontsizetwntyeight'];
  //       this.themessdto.Fontsizetwntynine = result.font['fontsizetwntynine'];

  //       this.themessdto.Fontsizethirty = result.font['fontsizethirty'];
  //       this.themessdto.Fontsizethirtyone = result.font['fontsizethirtyone'];
  //       this.themessdto.Fontsizethirtytwo = result.font['fontsizethirtytwo'];
  //       this.themessdto.Fontsizethirtythree = result.font['fontsizethirtythree'];
  //       this.themessdto.Fontsizethirtyfor = result.font['fontsizethirtyfor'];
  //       this.themessdto.Fontsizethirtyfive = result.font['fontsizethirtyfive'];
  //       this.themessdto.Fontsizethirtysix = result.font['fontsizethirtysix'];
  //       this.themessdto.Fontsizethirtyseven = result.font['fontsizethirtyseven'];
  //       this.themessdto.Fontsizethirtyeight = result.font['fontsizethirtyeight'];
  //       this.themessdto.Fontsizethirtynine = result.font['fontsizethirtynine'];

  //       this.themessdto.Fontsizefourty = result.font['fontsizefourty'];
  //       this.themessdto.Fontsizefourtyone = result.font['fontsizefourtyone'];
  //       this.themessdto.Fontsizefourtytwo = result.font['fontsizefourtytwo'];
  //       this.themessdto.Fontsizefourtythree = result.font['fontsizefourtythree'];
  //       this.themessdto.Fontsizefourtyfour = result.font['fontsizefourtyfour'];
  //       this.themessdto.Fontsizefourtyfive = result.font['fontsizefourtyfive'];
  //       this.themessdto.Fontsizefourtysix = result.font['fontsizefourtysix'];
  //       this.themessdto.Fontsizefourtyseven = result.font['fontsizefourtyseven'];
  //       this.themessdto.Fontsizefourtyeight = result.font['fontsizefourtyeight'];
  //       this.themessdto.Fontsizefourtynine = result.font['fontsizefourtynine'];

  //       this.themessdto.Fontsizefifty = result.font['fontsizefifty'];

  //       // colors

  //       this.themessdto.Darka = result.color['darka'];
  //       this.themessdto.Darkab = result.color['darkab'];
  //       this.themessdto.Darkac = result.color['darkac'];
  //       this.themessdto.Darkad = result.color['darkad'];
  //       this.themessdto.Darkae = result.color['darkae'];
  //       this.themessdto.Darkaf = result.color['darkaf'];
  //       this.themessdto.Darkag = result.color['darkag'];
  //       this.themessdto.Darkah = result.color['darkah'];
  //       this.themessdto.Darkai = result.color['darkai'];
  //       this.themessdto.Darkaj = result.color['darkaj'];

  //       this.themessdto.Lightak = result.color['lightak'];
  //       this.themessdto.Lightal = result.color['lightal'];
  //       this.themessdto.Lightam = result.color['lightam'];
  //       this.themessdto.Lightan = result.color['lightan'];
  //       this.themessdto.Lightao = result.color['lightao'];
  //       this.themessdto.Lightap = result.color['lightap'];
  //       this.themessdto.Lightaq = result.color['lightaq'];
  //       this.themessdto.Lightar = result.color['lightar'];
  //       this.themessdto.Lightas = result.color['lightas'];
  //       this.themessdto.Whitefont = result.color['whitefont'];
  //       this.themessdto.Blackfont = result.color['blackfont'];



  //       this.themessdto.Colorthemename = result.Colorthemename;
  //       this.themessdto.Colorfsizename = result.Colorfsizename;
  //       this.themessdto.Colorffamilyname = result.Colorffamilyname;


  //       this.selectedtheme = this.themessdto.Colorthemename,
  //         this.selectedfontsize = this.themessdto.Colorfsizename,
  //         this.selectedfontfamily = this.themessdto.Colorffamilyname,

  //         this.setThemesss();
  //       this.setFonts();
  //       this.addDefColorTheme();
  //       this.addDefFontTheme();
  //     }
  //   );


  // }

  // setThemesss() {
  //   darkTheme.properties = {
  //     '--dark-a': this.themessdto.Darka,
  //     '--dark-ab': this.themessdto.Darkab,
  //     '--dark-ac': this.themessdto.Darkac,
  //     '--dark-ad': this.themessdto.Darkad,
  //     '--dark-ae': this.themessdto.Darkae,
  //     '--dark-af': this.themessdto.Darkaf,
  //     '--dark-ag': this.themessdto.Darkag,
  //     '--dark-ah': this.themessdto.Darkah,
  //     '--dark-ai': this.themessdto.Darkai,
  //     '--dark-aj': this.themessdto.Darkaj,

  //     '--light-ak': this.themessdto.Lightak,
  //     '--light-al': this.themessdto.Lightal,
  //     '--light-am': this.themessdto.Lightam,
  //     '--light-an': this.themessdto.Lightan,
  //     '--light-ao': this.themessdto.Lightao,
  //     '--light-ap': this.themessdto.Lightap,
  //     '--light-aq': this.themessdto.Lightaq,
  //     '--light-ar': this.themessdto.Lightar,
  //     '--light-as': this.themessdto.Lightas,
  //     '--white-font': this.themessdto.Whitefont,
  //     '--black-font': this.themessdto.Blackfont
  //   };
  // }

  // setFonts() {
  //   mediumFonts.properties = {
  //     // '--font-sizefive': this.themessdto.Fontsizefive,
  //     // '': ''

  //     '--font-sizefive': this.themessdto.Fontsizefive,
  //     '--font-sizesix': this.themessdto.Fontsizesix,
  //     '--font-sizeseven': this.themessdto.Fontsizeseven,
  //     '--font-sizeeight': this.themessdto.Fontsizeeight,
  //     '--font-sizenine': this.themessdto.Fontsizenine,
  //     '--font-sizeten': this.themessdto.Fontsizeten,

  //     '--font-sizeeleven': this.themessdto.Fontsizeeleven,
  //     '--font-sizetwel': this.themessdto.Fontsizetwel,
  //     '--font-sizethirteen': this.themessdto.Fontsizethirteen,
  //     '--font-sizefourteen': this.themessdto.Fontsizefourteen,
  //     '--font-sizefifteen': this.themessdto.Fontsizefifteen,
  //     '--font-sizesixteen': this.themessdto.Fontsizesixteen,
  //     '--font-sizeseventeen': this.themessdto.Fontsizeseventeen,
  //     '--font-sizeeighteen': this.themessdto.Fontsizeeighteen,
  //     '--font-sizenineteen': this.themessdto.Fontsizenineteen,
  //     '--font-sizetwnty': this.themessdto.Fontsizetwnty,

  //     '--font-sizetwntyone': this.themessdto.Fontsizetwntyone,
  //     '--font-sizetwntytwo': this.themessdto.Fontsizetwntytwo,
  //     '--font-sizetwntythree': this.themessdto.Fontsizetwntythree,
  //     '--font-sizetwntyfoure': this.themessdto.Fontsizetwntyfoure,
  //     '--font-sizetwntyfive': this.themessdto.Fontsizetwntyfive,
  //     '--font-sizetwntysix': this.themessdto.Fontsizetwntysix,
  //     '--font-sizetwntyseven': this.themessdto.Fontsizetwntyseven,
  //     '--font-sizetwntyeight': this.themessdto.Fontsizetwntyeight,
  //     '--font-sizetwntynine': this.themessdto.Fontsizetwntynine,

  //     '--font-sizethirty': this.themessdto.Fontsizethirty,
  //     '--font-sizethirtyone': this.themessdto.Fontsizethirtyone,
  //     '--font-sizethirtytwo': this.themessdto.Fontsizethirtytwo,
  //     '--font-sizethirtythree': this.themessdto.Fontsizethirtythree,
  //     '--font-sizethirtyfor': this.themessdto.Fontsizethirtyfor,
  //     '--font-sizethirtyfive': this.themessdto.Fontsizethirtyfive,
  //     '--font-sizethirtysix': this.themessdto.Fontsizethirtysix,
  //     '--font-sizethirtyseven': this.themessdto.Fontsizethirtyseven,
  //     '--font-sizethirtyeight': this.themessdto.Fontsizethirtyeight,
  //     '--font-sizethirtynine': this.themessdto.Fontsizethirtynine,

  //     '--font-sizefourty': this.themessdto.Fontsizefourty,
  //     '--font-sizefourtyone': this.themessdto.Fontsizefourtyone,
  //     '--font-sizefourtytwo': this.themessdto.Fontsizefourtytwo,
  //     '--font-sizefourtythree': this.themessdto.Fontsizefourtythree,
  //     '--font-sizefourtyfour': this.themessdto.Fontsizefourtyfour,
  //     '--font-sizefourtyfive': this.themessdto.Fontsizefourtyfive,
  //     '--font-sizefourtysix': this.themessdto.Fontsizefourtysix,
  //     '--font-sizefourtyseven': this.themessdto.Fontsizefourtyseven,
  //     '--font-sizefourtyeight': this.themessdto.Fontsizefourtyeight,
  //     '--font-sizefourtynine': this.themessdto.Fontsizefourtynine,

  //     '--font-sizefifty': this.themessdto.Fontsizefifty,
  //   };
  // }

  // addDefColorTheme() {
  //   const active = this.themeService.setTheme('dark');
  // }
  // addDefFontTheme() {
  //   const active = this.themeService.setTheme('medium');
  // }

  // ThemeToggle() {
  //   // const active = this.themeService.setTheme(this.selectedtheme);
  //   this.themeservisedb.changeuserthemes(this.selectedtheme).subscribe(
  //     (result) => {
  //       // this.themedataa = result;

  //       // this.themessdto.Fontsizefive = result.Fontsizefive;

  //       this.themessdto.Fontsizefive = result.font['fontsizefive'];
  //       this.themessdto.Fontsizesix = result.font['fontsizesix'];
  //       this.themessdto.Fontsizeseven = result.font['fontsizeseven'];
  //       this.themessdto.Fontsizeeight = result.font['fontsizeeight'];
  //       this.themessdto.Fontsizenine = result.font['fontsizenine'];
  //       this.themessdto.Fontsizeten = result.font['fontsizeten'];

  //       this.themessdto.Fontsizeeleven = result.font['fontsizeeleven'];
  //       this.themessdto.Fontsizetwel = result.font['fontsizetwel'];
  //       this.themessdto.Fontsizethirteen = result.font['fontsizethirteen'];
  //       this.themessdto.Fontsizefourteen = result.font['fontsizefourteen'];
  //       this.themessdto.Fontsizefifteen = result.font['fontsizefifteen'];
  //       this.themessdto.Fontsizesixteen = result.font['fontsizesixteen'];
  //       this.themessdto.Fontsizeseventeen = result.font['fontsizeseventeen'];
  //       this.themessdto.Fontsizeeighteen = result.font['fontsizeeighteen'];
  //       this.themessdto.Fontsizenineteen = result.font['fontsizenineteen'];
  //       this.themessdto.Fontsizetwnty = result.font['fontsizetwnty'];

  //       this.themessdto.Fontsizetwntyone = result.font['fontsizetwntyone'];
  //       this.themessdto.Fontsizetwntytwo = result.font['fontsizetwntytwo'];
  //       this.themessdto.Fontsizetwntythree = result.font['fontsizetwntythree'];
  //       this.themessdto.Fontsizetwntyfoure = result.font['fontsizetwntyfoure'];
  //       this.themessdto.Fontsizetwntyfive = result.font['fontsizetwntyfive'];
  //       this.themessdto.Fontsizetwntysix = result.font['fontsizetwntysix'];
  //       this.themessdto.Fontsizetwntyseven = result.font['fontsizetwntyseven'];
  //       this.themessdto.Fontsizetwntyeight = result.font['fontsizetwntyeight'];
  //       this.themessdto.Fontsizetwntynine = result.font['fontsizetwntynine'];

  //       this.themessdto.Fontsizethirty = result.font['fontsizethirty'];
  //       this.themessdto.Fontsizethirtyone = result.font['fontsizethirtyone'];
  //       this.themessdto.Fontsizethirtytwo = result.font['fontsizethirtytwo'];
  //       this.themessdto.Fontsizethirtythree = result.font['fontsizethirtythree'];
  //       this.themessdto.Fontsizethirtyfor = result.font['fontsizethirtyfor'];
  //       this.themessdto.Fontsizethirtyfive = result.font['fontsizethirtyfive'];
  //       this.themessdto.Fontsizethirtysix = result.font['fontsizethirtysix'];
  //       this.themessdto.Fontsizethirtyseven = result.font['fontsizethirtyseven'];
  //       this.themessdto.Fontsizethirtyeight = result.font['fontsizethirtyeight'];
  //       this.themessdto.Fontsizethirtynine = result.font['fontsizethirtynine'];

  //       this.themessdto.Fontsizefourty = result.font['fontsizefourty'];
  //       this.themessdto.Fontsizefourtyone = result.font['fontsizefourtyone'];
  //       this.themessdto.Fontsizefourtytwo = result.font['fontsizefourtytwo'];
  //       this.themessdto.Fontsizefourtythree = result.font['fontsizefourtythree'];
  //       this.themessdto.Fontsizefourtyfour = result.font['fontsizefourtyfour'];
  //       this.themessdto.Fontsizefourtyfive = result.font['fontsizefourtyfive'];
  //       this.themessdto.Fontsizefourtysix = result.font['fontsizefourtysix'];
  //       this.themessdto.Fontsizefourtyseven = result.font['fontsizefourtyseven'];
  //       this.themessdto.Fontsizefourtyeight = result.font['fontsizefourtyeight'];
  //       this.themessdto.Fontsizefourtynine = result.font['fontsizefourtynine'];

  //       this.themessdto.Fontsizefifty = result.font['fontsizefifty'];

  //       // colors

  //       this.themessdto.Darka = result.color['darka'];
  //       this.themessdto.Darkab = result.color['darkab'];
  //       this.themessdto.Darkac = result.color['darkac'];
  //       this.themessdto.Darkad = result.color['darkad'];
  //       this.themessdto.Darkae = result.color['darkae'];
  //       this.themessdto.Darkaf = result.color['darkaf'];
  //       this.themessdto.Darkag = result.color['darkag'];
  //       this.themessdto.Darkah = result.color['darkah'];
  //       this.themessdto.Darkai = result.color['darkai'];
  //       this.themessdto.Darkaj = result.color['darkaj'];

  //       this.themessdto.Lightak = result.color['lightak'];
  //       this.themessdto.Lightal = result.color['lightal'];
  //       this.themessdto.Lightam = result.color['lightam'];
  //       this.themessdto.Lightan = result.color['lightan'];
  //       this.themessdto.Lightao = result.color['lightao'];
  //       this.themessdto.Lightap = result.color['lightap'];
  //       this.themessdto.Lightaq = result.color['lightaq'];
  //       this.themessdto.Lightar = result.color['lightar'];
  //       this.themessdto.Lightas = result.color['lightas'];
  //       this.themessdto.Whitefont = result.color['whitefont'];
  //       this.themessdto.Blackfont = result.color['blackfont'];



  //       this.themessdto.Colorthemename = result.Colorthemename;
  //       this.themessdto.Colorfsizename = result.Colorfsizename;
  //       this.themessdto.Colorffamilyname = result.Colorffamilyname;


  //       this.selectedtheme = this.themessdto.Colorthemename,
  //         this.selectedfontsize = this.themessdto.Colorfsizename,
  //         this.selectedfontfamily = this.themessdto.Colorffamilyname,

  //         this.setThemesss();
  //       this.setFonts();
  //       this.addDefColorTheme();
  //       this.addDefFontTheme();
  //     }
  //   );

  // }

  // FontsToggle() {
  //   // const active = this.themeService.setTheme(this.selectedfontsize);
  //   this.themeservisedb.changeuserthemes(this.selectedfontsize).subscribe(
  //     (result) => {
  //       // this.themedataa = result;

  //       // this.themessdto.Fontsizefive = result.Fontsizefive;


  //       this.themessdto.Fontsizefive = result.font['fontsizefive'];
  //       this.themessdto.Fontsizesix = result.font['fontsizesix'];
  //       this.themessdto.Fontsizeseven = result.font['fontsizeseven'];
  //       this.themessdto.Fontsizeeight = result.font['fontsizeeight'];
  //       this.themessdto.Fontsizenine = result.font['fontsizenine'];
  //       this.themessdto.Fontsizeten = result.font['fontsizeten'];

  //       this.themessdto.Fontsizeeleven = result.font['fontsizeeleven'];
  //       this.themessdto.Fontsizetwel = result.font['fontsizetwel'];
  //       this.themessdto.Fontsizethirteen = result.font['fontsizethirteen'];
  //       this.themessdto.Fontsizefourteen = result.font['fontsizefourteen'];
  //       this.themessdto.Fontsizefifteen = result.font['fontsizefifteen'];
  //       this.themessdto.Fontsizesixteen = result.font['fontsizesixteen'];
  //       this.themessdto.Fontsizeseventeen = result.font['fontsizeseventeen'];
  //       this.themessdto.Fontsizeeighteen = result.font['fontsizeeighteen'];
  //       this.themessdto.Fontsizenineteen = result.font['fontsizenineteen'];
  //       this.themessdto.Fontsizetwnty = result.font['fontsizetwnty'];

  //       this.themessdto.Fontsizetwntyone = result.font['fontsizetwntyone'];
  //       this.themessdto.Fontsizetwntytwo = result.font['fontsizetwntytwo'];
  //       this.themessdto.Fontsizetwntythree = result.font['fontsizetwntythree'];
  //       this.themessdto.Fontsizetwntyfoure = result.font['fontsizetwntyfoure'];
  //       this.themessdto.Fontsizetwntyfive = result.font['fontsizetwntyfive'];
  //       this.themessdto.Fontsizetwntysix = result.font['fontsizetwntysix'];
  //       this.themessdto.Fontsizetwntyseven = result.font['fontsizetwntyseven'];
  //       this.themessdto.Fontsizetwntyeight = result.font['fontsizetwntyeight'];
  //       this.themessdto.Fontsizetwntynine = result.font['fontsizetwntynine'];

  //       this.themessdto.Fontsizethirty = result.font['fontsizethirty'];
  //       this.themessdto.Fontsizethirtyone = result.font['fontsizethirtyone'];
  //       this.themessdto.Fontsizethirtytwo = result.font['fontsizethirtytwo'];
  //       this.themessdto.Fontsizethirtythree = result.font['fontsizethirtythree'];
  //       this.themessdto.Fontsizethirtyfor = result.font['fontsizethirtyfor'];
  //       this.themessdto.Fontsizethirtyfive = result.font['fontsizethirtyfive'];
  //       this.themessdto.Fontsizethirtysix = result.font['fontsizethirtysix'];
  //       this.themessdto.Fontsizethirtyseven = result.font['fontsizethirtyseven'];
  //       this.themessdto.Fontsizethirtyeight = result.font['fontsizethirtyeight'];
  //       this.themessdto.Fontsizethirtynine = result.font['fontsizethirtynine'];

  //       this.themessdto.Fontsizefourty = result.font['fontsizefourty'];
  //       this.themessdto.Fontsizefourtyone = result.font['fontsizefourtyone'];
  //       this.themessdto.Fontsizefourtytwo = result.font['fontsizefourtytwo'];
  //       this.themessdto.Fontsizefourtythree = result.font['fontsizefourtythree'];
  //       this.themessdto.Fontsizefourtyfour = result.font['fontsizefourtyfour'];
  //       this.themessdto.Fontsizefourtyfive = result.font['fontsizefourtyfive'];
  //       this.themessdto.Fontsizefourtysix = result.font['fontsizefourtysix'];
  //       this.themessdto.Fontsizefourtyseven = result.font['fontsizefourtyseven'];
  //       this.themessdto.Fontsizefourtyeight = result.font['fontsizefourtyeight'];
  //       this.themessdto.Fontsizefourtynine = result.font['fontsizefourtynine'];

  //       this.themessdto.Fontsizefifty = result.font['fontsizefifty'];

  //       // colors

  //       this.themessdto.Darka = result.color['darka'];
  //       this.themessdto.Darkab = result.color['darkab'];
  //       this.themessdto.Darkac = result.color['darkac'];
  //       this.themessdto.Darkad = result.color['darkad'];
  //       this.themessdto.Darkae = result.color['darkae'];
  //       this.themessdto.Darkaf = result.color['darkaf'];
  //       this.themessdto.Darkag = result.color['darkag'];
  //       this.themessdto.Darkah = result.color['darkah'];
  //       this.themessdto.Darkai = result.color['darkai'];
  //       this.themessdto.Darkaj = result.color['darkaj'];

  //       this.themessdto.Lightak = result.color['lightak'];
  //       this.themessdto.Lightal = result.color['lightal'];
  //       this.themessdto.Lightam = result.color['lightam'];
  //       this.themessdto.Lightan = result.color['lightan'];
  //       this.themessdto.Lightao = result.color['lightao'];
  //       this.themessdto.Lightap = result.color['lightap'];
  //       this.themessdto.Lightaq = result.color['lightaq'];
  //       this.themessdto.Lightar = result.color['lightar'];
  //       this.themessdto.Lightas = result.color['lightas'];
  //       this.themessdto.Whitefont = result.color['whitefont'];
  //       this.themessdto.Blackfont = result.color['blackfont'];


  //       this.themessdto.Colorthemename = result.Colorthemename;
  //       this.themessdto.Colorfsizename = result.Colorfsizename;
  //       this.themessdto.Colorffamilyname = result.Colorffamilyname;


  //       this.selectedtheme = this.themessdto.Colorthemename,
  //         this.selectedfontsize = this.themessdto.Colorfsizename,
  //         this.selectedfontfamily = this.themessdto.Colorffamilyname,

  //         this.setThemesss();
  //       this.setFonts();
  //       this.addDefColorTheme();
  //       this.addDefFontTheme();
  //     }
  //   );

  // }
  // FontFamilyToggle() {
  //   // const active = this.themeService.setTheme(this.selectedfontfamily);
  //   this.themeservisedb.changeuserthemes(this.selectedfontfamily).subscribe(
  //     (result) => {
  //       // this.themedataa = result;

  //       // this.themessdto.Fontsizefive = result.Fontsizefive;


  //       this.themessdto.Fontsizefive = result.font['fontsizefive'];
  //       this.themessdto.Fontsizesix = result.font['fontsizesix'];
  //       this.themessdto.Fontsizeseven = result.font['fontsizeseven'];
  //       this.themessdto.Fontsizeeight = result.font['fontsizeeight'];
  //       this.themessdto.Fontsizenine = result.font['fontsizenine'];
  //       this.themessdto.Fontsizeten = result.font['fontsizeten'];

  //       this.themessdto.Fontsizeeleven = result.font['fontsizeeleven'];
  //       this.themessdto.Fontsizetwel = result.font['fontsizetwel'];
  //       this.themessdto.Fontsizethirteen = result.font['fontsizethirteen'];
  //       this.themessdto.Fontsizefourteen = result.font['fontsizefourteen'];
  //       this.themessdto.Fontsizefifteen = result.font['fontsizefifteen'];
  //       this.themessdto.Fontsizesixteen = result.font['fontsizesixteen'];
  //       this.themessdto.Fontsizeseventeen = result.font['fontsizeseventeen'];
  //       this.themessdto.Fontsizeeighteen = result.font['fontsizeeighteen'];
  //       this.themessdto.Fontsizenineteen = result.font['fontsizenineteen'];
  //       this.themessdto.Fontsizetwnty = result.font['fontsizetwnty'];

  //       this.themessdto.Fontsizetwntyone = result.font['fontsizetwntyone'];
  //       this.themessdto.Fontsizetwntytwo = result.font['fontsizetwntytwo'];
  //       this.themessdto.Fontsizetwntythree = result.font['fontsizetwntythree'];
  //       this.themessdto.Fontsizetwntyfoure = result.font['fontsizetwntyfoure'];
  //       this.themessdto.Fontsizetwntyfive = result.font['fontsizetwntyfive'];
  //       this.themessdto.Fontsizetwntysix = result.font['fontsizetwntysix'];
  //       this.themessdto.Fontsizetwntyseven = result.font['fontsizetwntyseven'];
  //       this.themessdto.Fontsizetwntyeight = result.font['fontsizetwntyeight'];
  //       this.themessdto.Fontsizetwntynine = result.font['fontsizetwntynine'];

  //       this.themessdto.Fontsizethirty = result.font['fontsizethirty'];
  //       this.themessdto.Fontsizethirtyone = result.font['fontsizethirtyone'];
  //       this.themessdto.Fontsizethirtytwo = result.font['fontsizethirtytwo'];
  //       this.themessdto.Fontsizethirtythree = result.font['fontsizethirtythree'];
  //       this.themessdto.Fontsizethirtyfor = result.font['fontsizethirtyfor'];
  //       this.themessdto.Fontsizethirtyfive = result.font['fontsizethirtyfive'];
  //       this.themessdto.Fontsizethirtysix = result.font['fontsizethirtysix'];
  //       this.themessdto.Fontsizethirtyseven = result.font['fontsizethirtyseven'];
  //       this.themessdto.Fontsizethirtyeight = result.font['fontsizethirtyeight'];
  //       this.themessdto.Fontsizethirtynine = result.font['fontsizethirtynine'];

  //       this.themessdto.Fontsizefourty = result.font['fontsizefourty'];
  //       this.themessdto.Fontsizefourtyone = result.font['fontsizefourtyone'];
  //       this.themessdto.Fontsizefourtytwo = result.font['fontsizefourtytwo'];
  //       this.themessdto.Fontsizefourtythree = result.font['fontsizefourtythree'];
  //       this.themessdto.Fontsizefourtyfour = result.font['fontsizefourtyfour'];
  //       this.themessdto.Fontsizefourtyfive = result.font['fontsizefourtyfive'];
  //       this.themessdto.Fontsizefourtysix = result.font['fontsizefourtysix'];
  //       this.themessdto.Fontsizefourtyseven = result.font['fontsizefourtyseven'];
  //       this.themessdto.Fontsizefourtyeight = result.font['fontsizefourtyeight'];
  //       this.themessdto.Fontsizefourtynine = result.font['fontsizefourtynine'];

  //       this.themessdto.Fontsizefifty = result.font['fontsizefifty'];

  //       // colors

  //       this.themessdto.Darka = result.color['darka'];
  //       this.themessdto.Darkab = result.color['darkab'];
  //       this.themessdto.Darkac = result.color['darkac'];
  //       this.themessdto.Darkad = result.color['darkad'];
  //       this.themessdto.Darkae = result.color['darkae'];
  //       this.themessdto.Darkaf = result.color['darkaf'];
  //       this.themessdto.Darkag = result.color['darkag'];
  //       this.themessdto.Darkah = result.color['darkah'];
  //       this.themessdto.Darkai = result.color['darkai'];
  //       this.themessdto.Darkaj = result.color['darkaj'];

  //       this.themessdto.Lightak = result.color['lightak'];
  //       this.themessdto.Lightal = result.color['lightal'];
  //       this.themessdto.Lightam = result.color['lightam'];
  //       this.themessdto.Lightan = result.color['lightan'];
  //       this.themessdto.Lightao = result.color['lightao'];
  //       this.themessdto.Lightap = result.color['lightap'];
  //       this.themessdto.Lightaq = result.color['lightaq'];
  //       this.themessdto.Lightar = result.color['lightar'];
  //       this.themessdto.Lightas = result.color['lightas'];
  //       this.themessdto.Whitefont = result.color['whitefont'];
  //       this.themessdto.Blackfont = result.color['blackfont'];


  //       this.themessdto.Colorthemename = result.Colorthemename;
  //       this.themessdto.Colorfsizename = result.Colorfsizename;
  //       this.themessdto.Colorffamilyname = result.Colorffamilyname;


  //       this.selectedtheme = this.themessdto.Colorthemename,
  //         this.selectedfontsize = this.themessdto.Colorfsizename,
  //         this.selectedfontfamily = this.themessdto.Colorffamilyname,

  //         this.setThemesss();
  //       this.setFonts();
  //       this.addDefColorTheme();
  //       this.addDefFontTheme();
  //     }
  //   );

  // }


  // saveCustomization() {
  //   this.tokenset = sessionStorage.getItem('token');
  //   // this.themessdto.User = this.usernamee;
  //   // this.themessdto.Theme = this.selectedtheme;
  //   // this.themessdto.Fontsize = this.selectedfontfamily;
  //   // this.themessdto.Fontfamily = this.selectedfontsize;
  //   this.themeservisedb.saveusertheme(this.tokenset, this.selectedtheme, this.selectedfontfamily, this.selectedfontsize).subscribe(
  //     (result) => {
  //       if (!result) {
  //         // this.setallthemes();
  //         this.alerttypee = 'success';
  //         this.fristparam = 'Your Theme Is Save';
  //         this.secontparam = '';
  //         this.openDialog(this.alerttypee, this.fristparam, this.secontparam);
  //       } else {
  //         // this.setallthemes();
  //         this.alerttypee = 'error';
  //         this.fristparam = 'Your Theme Is Not Save';
  //         this.secontparam = '';
  //         this.openDialog(this.alerttypee, this.fristparam, this.secontparam);
  //       }
  //     }
  //   );
  // }



  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  setMenuContent(value: string) {
    this.menuContent = value;

  }

  logout() {
    this.authService.logout();
  }

}
