import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'WebPartCountrieWebPartStrings';

import 'countries/dist/countries/bundle.js';

export interface IWebPartCountrieWebPartProps {
  description: string;
}

export default class WebPartCountrieWebPart extends BaseClientSideWebPart<IWebPartCountrieWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `<app-web-part-countrie-web-part description="${ this.properties.description }"></app-web-part-countrie-web-part>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
