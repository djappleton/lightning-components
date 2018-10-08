({
    //Initialisation function that will get the data from the server
    //side controller and then update the 'values' attribute.
	doInit : function(component, event, helper) {
		var action = component.get("c.getPropertyValues");
        action.setParams({
            objectType: component.get("v.sObjectName"),
            objectProperty: component.get("v.sObjectProperty")
        });
        action.setCallback(this, function(response) {
            var list = response.getReturnValue();
            component.set("v.values", list);
        })
        $A.enqueueAction(action);
	}
})