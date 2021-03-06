
import { ContentItem, Fields } from 'kentico-cloud-delivery';

/**
 * This class was generated by 'kentico-cloud-model-generator-utility' at Sat May 04 2019 08:42:42 GMT-0400 (Eastern Daylight Time).
 *
 * Note: You can substitute 'ContentItem' type with another generated class. Generator doesn't have this information available
 * and so its up to you to define relationship between models.
 */
export class Homepage extends ContentItem {
    public featuredProject: ContentItem[];
    public headertext: Fields.RichTextField;
    public sectioncards: ContentItem[];
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
