<aura:application access="GLOBAL" implements="ltng:allowGuestAccess" >
    
	<aura:attribute name="titleNames" type="Object" />

	<c:getObjectListValues sObjectName="Contact" sObjectProperty="Salutation" values="{!v.titleNames}" />
	
	<lightning:select aura:id="filterTitle" name="filterTitle" label="Title" tabindex="20">
	    <option value="">Please select a title.</option>
	    <aura:iteration items="{!v.titleNames}" var="tName">
	        <option value="{!tName}">{!tName}</option>
	    </aura:iteration>
	</lightning:select> 
    
</aura:application>