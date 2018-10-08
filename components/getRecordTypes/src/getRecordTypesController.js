({
	doInit : function(component, event, helper) {
		var action = component.get("c.getRecordTypeInfos");
        action.setParams({
            objectType: component.get("v.sObjectName")
        });
        action.setCallback(this, function(response) {
            var list = response.getReturnValue();
            component.set("v.values", list);
        })
        $A.enqueueAction(action);
	}
})