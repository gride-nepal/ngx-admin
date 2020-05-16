import { Component } from '@angular/core';


@Component({
  selector: 'ngx-tab1',
  template: `
  <ngx-tiny-mce></ngx-tiny-mce>
  `,
})
export class Tab1Component { }

@Component({
  selector: 'ngx-tab2',
  template: `
  <ngx-tiny-mce></ngx-tiny-mce>
  <button>Submit</button>
  `,
})
export class Tab2Component { }

@Component({
  selector: 'ngx-tab3',
  template: `
    <ngx-tiny-mce></ngx-tiny-mce>
  `,
})
export class Tab3Component { }

@Component({
  selector: 'ngx-tab4',
  template: `
  <ngx-tiny-mce></ngx-tiny-mce>
  `,
})
export class Tab4Component { }

@Component({
  selector: 'ngx-tabs',
  styleUrls: ['./tabs.component.scss'],
  templateUrl: './tabs.component.html',
})

export class TabsComponent {

  tabs: any[] = [
    {
      title: 'User Terms and Condition',
      route: '/settings/terms-privacy/user-terms',
    },
    {
      title: 'User Privacy Policy',
      route: '/settings/terms-privacy/user-privacy',
    },
    {
      title: 'Provider Terms and Condition',
      route: '/settings/terms-privacy/partner-terms',
    },
    {
      title: 'Provider Privacy Policy',
      route: '/settings/terms-privacy/partner-privacy',
    },
  ];

}
