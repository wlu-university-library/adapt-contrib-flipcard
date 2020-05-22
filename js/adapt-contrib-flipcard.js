define([
    "core/js/adapt",
    "core/js/models/itemsComponentModel",
    "./FlipcardView"
], function(Adapt, ItemsComponentModel, FlipcardView) {

    return Adapt.register("flipcard", {
        view: FlipcardView,
        model: ItemsComponentModel
    });

});
