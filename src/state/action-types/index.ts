export enum LoginActionType {
	CHECK = 'check',
	LOGOUT = 'logout',
}

export enum ServicesActionType {
	GET_SERVICES = 'getServices',
	UPDATE_SERVICE = 'updateService',
	ADD_SERVICE = 'addService',
	DELETE_SERVICE = 'deleteService',
}

export enum FormsVisibilityActionType {
	SHOW = 'show',
	HIDE = 'hide',
}

export enum FormName {
	SERVICE_EDIT_FORM = 'serviceEditForm',
	SERVICE_ADD_FORM = 'serviceAddForm',
	CONTACT_FORM = 'contactForm',
	GALERY_FORM = 'galeryForm',
	UPLOAD_IMAGE_FORM = 'uploadImageForm',
}

export enum ContactActionType {
	GET_CONTACT = 'getContact',
	UPDATE_CONTACT = 'updateContact',
}

export enum GaleryActionType {
	GET_IMAGES = 'getImages',
	UPLOAD_IMAGE = 'uploadImage',
	DELETE_IMAGE = 'deleteImage',
}

export enum ProcessingActionType {
	PROCESSING = 'processing',
	PROCESSING_DONE = 'processingDone',
}
