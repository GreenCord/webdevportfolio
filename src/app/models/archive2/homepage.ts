
import { ContentItem, Fields } from 'kentico-cloud-delivery';

/**
 * This class was generated by 'kentico-cloud-model-generator-utility' at Sun Nov 18 2018 09:15:15 GMT-0500 (Eastern Standard Time).
 *
 * Note: You can substitute 'ContentItem' type with another generated class. Generator doesn't have this information available
 * and so its up to you to define relationship between models.
 */
export class Homepage extends ContentItem {
    public featuredProject: ContentItem[];
    public introtext: Fields.RichTextField;
    constructor() {
        super({
            propertyResolver: ((fieldName: string) => {
                if (fieldName === 'featured_project') {
                    return 'featuredProject';
                }
                return fieldName;
            })
        });
    }
}