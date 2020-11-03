import Model from 'flarum/Model';
import mixin from 'flarum/utils/mixin';

export default class Link extends mixin(Model, {
    title: Model.attribute('title'),
    icon: Model.attribute('icon'),
    type: Model.attribute('type'),
    url: Model.attribute('url'),
    position: Model.attribute('position'),
    isInternal: Model.attribute('isInternal'),
    isNewtab: Model.attribute('isNewtab'),
    isChild: Model.attribute('isChild'),
    parent: Model.hasOne('parent'),
}) {}
