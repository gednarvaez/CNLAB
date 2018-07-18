var localWidgetPlugin;
var miPC = find_os_version();
 
(function (o) {
    var f = function () {
        var d = o.location;
        o.aTags = o.aTags || [];
        for (var i = 0; i < o.aTags.length; i++) {
            var oTag = o.aTags[i];
            var fs = d.getElementsByTagName(oTag.type)[0], e;
            if (d.getElementById(oTag.id))
                return;
            e = d.createElement(oTag.type);
            e.id = oTag.id;
            if (oTag.type == "script") {
                e.src = oTag.path;
            } else {
                e.type = 'text/css';
                e.rel = 'stylesheet';
                e.href = oTag.path;
            }
            if (fs) {
                fs.parentNode.insertBefore(e, fs);
            } else {
                d.head.appendChild(e);
            }
        }
    }, ol = window.onload;
    if (o.onload) {
        typeof window.onload != "function" ? window.onload = f : window.onload = function () {
            ol();
            f();
        }
    } else
        f();
})({

    location: document,
    onload: false,
    aTags: [

        {
            type: "script",
            id: "genesys-widgets-script",
            path: "public/js/widgets.min.js"
        },
        {
            type: "link",
            id: "genesys-widgets-styles",
            path: "public/css/widgets.min.css"
        }

    ]
});





var gmsServicesConfig = {
    GMSChatURL: 'https://gms-chile.crossnet.la/genesys/2/chat/CNLAB',
    GMSCallbackURL: 'https://gms-chile.crossnet.la/genesys/2/openmedia/CNLAB-webcallback',
    GMSEmailURL: 'https://gms-chile.crossnet.la/genesys/2/email/CNLAB',
};

var initLocalWidgetConfiguration = function () {

// ##### Widget Define UI
// Global Genesys Object
    if (!window._genesys)
        window._genesys = {};
    if (!window._gt)
        window._gt = [];

    if (!window._genesys.widgets)
        window._genesys.widgets = {};

// Initialize per widget - not to override extensions if defined before.
//Initializes widgets configuration object.
    window._genesys.widgets.main = {
        debug: false,
        theme: 'light',
        lang: 'en',
        i18n: {
           "en": {
               "webchat": {
                   "AgentConnected" : "<%Agent%> se ha unido.",
                   "AgentDisconnected": "<%Agent%> se ha desconectado",
                   "ChatFormSubmit" : "Iniciar Chat",
                   "ChatStarted": "Chat Iniciado ",
                   "ChatEnded": "Chat Finalizado",
                   "ChatTitle": "Chat en Línea",
                   "ConfirmCloseWindow": "Estás seguro que desea cerrar el chat?",
                   "ChatFormPlaceholderFirstName" : "Ingresa tu Nombre",
                   "ChatFormPlaceholderLastName" : "Ingresa tu Apellido",
                   "ChatFormPlaceholderDni" : "Ingresa tu Nro. de cédula",
                   "ChatInputPlaceholder": "Envía un mensaje",
                   "ChatInputSend": "Enviar",
                   "ChatEndQuestion": "¿Estás seguro de querer cerrar la sesión?",
                   "ChatEndCancel": "Cancelar",
                   "ChatEndConfirm": "Finalizar",
                   "ConfirmCloseCancel": "Cancelar",
                   "ConfirmCloseConfirm": "Cerrar",
                   "ChatError": "Se presentó un error al  iniciar el chat. Por favor, intentalo nuevamente",
                   "Errors": {
                       "102": "Campo obligatorio",
                       "RestoredOffline": "El envío de mensajes está tardando más de lo normal. Lamentamos la demora",
                       "Disconnected": "<div style='text-align:center'>Conexión perdida<br/>Por favor, revise su conexión</div>",
                       "Reconnected": "<div style='text-align:center'>Conexión restablecida</div>",
                       "240": "Lo sentimos, pero no podemos iniciar un nuevo chat en este momento. Por favor, inténtelo de nuevo más tarde"
                    }
                },
                "channelselector": {
                    "Title": "Asistencia en Línea",
                    "SubTitle": "¿Cómo deseas contactarnos?",
                    "WaitTimeTitle": "Tiempo de espera",
                    "AvailableTitle": "Disponible",
                    "UnavailableTitle": "No disponible",
                    "CobrowseButtonText": "CobrowseSubTitle",
                    "CallbackTitle": "¿Te llamamos?",
                },
                "sendmessage": {
                    "title": "Escríbenos",
                    "SendMessageButton": "Enviar",
                    "EmailOk": "OK",
                    "EmailFormPlaceholderFirstName": "Juan",
                    "EmailFormPlaceholderLastName": "Perez",
                    "EmailFormPlaceholderEmail": "miemail@correo.co",
                    "EmailFormPlaceholderSubject": "Consulta de Servicios",
                    "EmailFormPlaceholderTypetexthere": "Escribe aqui tu mensaje",
                    "EmailFormFirstName": "Nombre",
                    "EmailFormLastName": "Apellido",
                    "EmailFormEmail": "Email",
                    "EmailFormSubject": "Asunto",
                    "EmailFormAttachfiles": "Adjuntar archivos",
                    "EmailFormSend": "Enviar",
                    "ConfirmCloseWindow": "Estás seguro que deseas cerrar la ventana de mensaje?",
                    "SendMsgFormCancel": "Cancelar",
                    "SendMsgFormClose": "Cerrar",
                    "Errors": {
                        "102": "Campo Nombre Obligatorio para continuar",
                        "103": "Campo Apellido Obligatorio para continuar",
                        "104": "Campo Asunto es obligatorio para continuar",
                        "181": "Campo Email es obligatorio para continuar",
                        "182": "Su mensaje está vacío",
                        "connectionError": "¡Ups! Tenemos un problema, por favor intenta mas tarde.",
                        "unknowError": "Algo ha ido mal, disculpe los inconvenientes. Por favor chequeé la configuración de su conexión a internet e intente nuevamente.",
                        "attachmentsLimit": "Total number of attachments exceeds limit: ",
                        "attachmentsSize": "Ha excedido la cantidad de documentos disponibles para adjuntar ",
                        "invalidFileType": "Archivo no soportado. Por favor adjunte imagenes, PDF's, archivos de texto y comprimidos ZIP.",
                        "invalidFromEmail": "Dirección de email de origen incorrecto",
                        "invalidMailbox": "Dirección de email de destino incorrecto."
                    }
                },
                "calendar": {
                    "CalendarDayLabels": [
                        "Domingo",
                        "Lunes",
                        "Martes",
                        "Miercoles",
                        "Jueves",
                        "Viernes",
                        "Sábado"
                    ],
                    "CalendarMonthLabels": [
                        "Ene",
                        "Feb",
                        "Mar",
                        "Abr",
                        "May",
                        "Jun",
                        "Jul",
                        "Ago",
                        "Sept",
                        "Oct",
                        "Nov",
                        "Dec"
                    ],
                    "CalendarLabelToday": "Hoy",
                    "CalendarLabelTomorrow": "Mañana",
                    "CalendarLabelMorning": "Día",
                    "CalendarLabelAfternoon": "Tarde",
                    "CalendarLabelEvening": "Noche",
                    "CalendarTitle": "Agenda tu llamada",
                    "CalendarOkButtonText": "OK",
                    "CalendarError": "No disponible para agendar"
                },
                "callback": {
                    "CallbackTitle": "Déjanos contactarte",
                    "CallbackTitleDescription": "Por favor, ingresa los siguientes datos",
                    "CancelButtonText": "Cancelar",
                    "ConfirmButtonText": "Confirmar",
                    "CallbackFirstName": "Nombre",
                    "CallbackPlaceholderFirstName": " ",
                    "CallbackLastName": "Apellido",
                    "CallbackPlaceholderLastName": " ",
                    "CallbackPhoneNumber": "Teléfono",
                    "CallbackPlaceholderPhoneNumber": "Obligatorio",
                    "CallbackEmail": "Email",
                    "CallbackPlaceholderEmail": "Opcional",
                    "CallbackPlaceholderNotes": "Opcional",
                    "CallbackDateTime": "Fecha y hora de llamada",
                    "CallbackDateTimeDescription": "¿Cuándo podemos contactarte?",
                    "CallbackTodayDate": "Hoy",
                    "CallbackDayLabels": [
                        "Domingo",
                        "Lunes",
                        "Martes",
                        "Miercoles",
                        "Jueves",
                        "Viernes",
                        "Sábado"
                    ],
                    "CallbackMonthLabels": [
                        "Ene",
                        "Feb",
                        "Mar",
                        "Abr",
                        "May",
                        "Jun",
                        "Jul",
                        "Ago",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dic"
                    ],
                    "CallbackTimeAtText": "a las: ",
                    "CallbackRadioButtonText": "Tan pronto sea posible",
                    "CallbackBookedPhoneNumberLabel": "Teléfono",
                    "CallbackBookedDateTimeLabel": "Fecha y Hora",
                    "CallbackBookedNotesLabel": "Asunto",
                    "CallbackBookedDescription": "Nos pondremos en contacto contigo",
                    "CallbackNotes": "Notas",
                    "CallbackDone": "Ok",
                    "CallbackOk": "Oky",
                    "CallbackCloseConfirm": "¿Estás seguro que deseas eliminar los registros de solicitud de llamada?",
                    "CallbackNoButtonText": "No",
                    "CallbackYesButtonText": "Si",
                    "CallbackPlaceholderCalendar": "Selecciona la fecha y hora de llamada",
                    "Errors": {
                        "unknownError": "Something went wrong, we apologize for the inconvenience. Please check your connection settings and try again."
                    }
                }
            }
        },
        mobileMode: 'auto',
        plugins: [
            // Refer to the Genesys Widgets API guide to determine plugin requirements for the widgets.
            "cx-webchat-service",
            "cx-webchat",
            "cx-send-message-service",
            "cx-send-message",
            "cx-callback-service",
            "cx-callback",
            "cx-calendar",
            "cx-channel-selector",
        ]
    };

    window._genesys.widgets.webchat = {
        dataURL: gmsServicesConfig.GMSChatURL,
        apikey: '', // For Apigee service only
        userData: {},
        emojis: true,
        actionsMenu: false,
        uploadsEnabled: false,
        form : {
            wrapper: "<table id='formulario'></table>",
            inputs: [
            {
                id: "cx_webchat_form_firstname",
                name: "firstname",
                maxlength: "100",
                placeholder: "@i18n:webchat.ChatFormPlaceholderFirstName",
                validate: function(event, form, input, label, jQuery, CXBus, Common) {
                    if(input) {
                        if (input.val() != "")
                            return true;
                        else
                            return false;
                    }
                    return false;
                }
            },
            {
               id: "cx_webchat_form_lastname",
                name: "lastname",
                maxlength: "100",
                placeholder: "@i18n:webchat.ChatFormPlaceholderLastName",
                validate: function(event, form, input, label, jQuery, CXBus, Common) {
                    if(input){
                        if (input.val() != ""){
                            return true;
                        }
                        else{
                            
                            return false;
                        }
                    }
                    return false;
                }
            },
            {
                id: "cx_webchat_form_dni",
                name: "cedula",
                maxlength: "100",
                type: "Number",
                placeholder: "@i18n:webchat.ChatFormPlaceholderDni",
                
            },
            
            {
                id: "cx_webchat_form_email",
                name: "email",
                maxlength: "100",
                placeholder: "Ingresa tu Email",
                validateWhileTyping: true, // default is false
            },
            {
                type: 'checkbox',
                label: "He Leído y acepto los <span>términos y condiciones</span>",
                id: "cx_webchat_box",
                name: "TyC",

                // validate: function(event, form, input, label, $, CXBus, Common){
                //     if(input.is(':checked')){
                //         jQuery(".alert_term").hide()
                //         return true
                //     }
                //     else{
                //         jQuery(".alert_term").show();
                //         return false
                //     }
                //     return false
                // }
                
            },
            ]
        },

        autoInvite: {
            enabled: false,
            timeToInviteSeconds: 5,
            inviteTimeoutSeconds: 30
        },
        chatButton: {
            enabled: false,
            openDelay: 100,
            effectDuration: 100,
            hideDuringInvite: true
        }
    };

   

    window._genesys.widgets.callback = {
        dataURL: gmsServicesConfig.GMSCallbackURL,
        theme: 'light',
        callDirection: 'USERTERMINATED',
        userData: {},
        countryCodes: true,
        formValidation: false,
        apikey: '' // For Apigee service only
    };

    window._genesys.widgets.calendar = {
        showAvailability: false,
        numberOfDays: 5,
        timeFormat: 12,
        calendarHours: {
            interval: 10,
            morning: {
                enable: true,
                openTime: '09:00',
                closeTime: '11:59'
            },
            afternoon: {
                enable: true,
                openTime: '12:00',
                closeTime: '18:59'
            },
            evening: {
                enable: true,
                openTime: '19:00',
                closeTime: '23:59'
            }
        }
    };

    window._genesys.widgets.sendmessage = {
        apikey: '',
        dataURL: gmsServicesConfig.GMSEmailURL,
        userData: {},
        SendMessageButton: {
            enabled: false,
            //template: '<div>Email</div>',
            //effect: 'fade',
            openDelay: 1000,
            effectDuration: 300,
            hideDuringInvite: true
        }
    };

    window._genesys.widgets.channelselector = {
        ewtRefreshInterval: 10,
        channels: [
            {
                enable: true,
                clickCommand: 'Callback.open',
                readyEvent: 'Callback.ready',
                displayName: '¿Te llamamos?',
                i18n: 'CallbackTitle',
                icon: 'call-incoming',
                ewt: {
                    display: true,
                    queue: 'callus_ewt_test_eservices',
                    availabilityThresholdMin: 300,
                    availabilityThresholdMax: 480,
                    hideChannelWhenThresholdMax: false
                }
            },
            {
                enable: true,
                clickCommand: 'WebChat.open',
                readyEvent: 'WebChat.ready',
                displayName: 'Chatea con nosotros',
                i18n: 'ChatTitle',
                icon: 'chat',
                ewt: {
                    display: true,
                    queue: 'chat_ewt_test_eservices',
                    availabilityThresholdMin: 300,
                    availabilityThresholdMax: 480,
                    hideChannelWhenThresholdMax: false
                }
            }, 

            {
            enable: true, 
            clickCommand: 'SendMessage.open', 
            readyEvent: 'SendMessage.ready', 
            displayName: 'Escríbenos', 
            i18n: 'EmailTitle', 
            icon: 'email', 
            html: '', 
            ewt: {
                display: true, 
                queue: 'email_ewt_test_eservices', 
                availabilityThresholdMin: 300, 
                availabilityThresholdMax: 480, 
                hideChannelWhenThresholdMax: false
                }
            }
            ]
    };
}

initLocalWidgetConfiguration();
var chatID = "";
window._genesys.widgets.onReady = function (CXBus) {
    localWidgetPlugin = window._genesys.widgets.bus.registerPlugin('MyLocalCustomization');

    jQuery(".prueba1").on("click", function(){
         localWidgetPlugin.command('ChannelSelector.open').done(function (e) {
            }).fail(function (e) {
        });
    });


    localWidgetPlugin.subscribe('WebChat.ready', function(e){
        _genesys.widgets.bus.subscribe("WebChatService.ajaxResponse", function(JSONResponse){
            chatID = JSONResponse.data.chatId;
        });
       

        localWidgetPlugin.subscribe("WebChat.opened", function(e){
            jQuery('.cx-form-inputs').before("<p class='alert_term'>Por favor acepte los términos y condiciones para continuar</p>");
            emojiAppend()
            
            jQuery(".cx-body").append("<iframe id='encuesta_frame' src='../../public/view/bcoEPA.html' height='420px' width='100%' align='center'></iframe>");
            jQuery(".cx-textarea-cell").append("<button class='btn enviar_btn cx-send' data-message='ChatSend'>Enviar</button>");
            jQuery("#encuesta_frame").hide();
            createAudioTag()
            jQuery('.cx-titlebar').on('click', function(event) {
                localWidgetPlugin.command('WebChat.minimize');
            });

            jQuery('.cx-minimized').on('click', function(event) {
                localWidgetPlugin.command('WebChat.unminimized');
            });

            jQuery("body > div > div > div > div.cx-body > div > div.cx-transcript-wrapper > div.cx-transcript > div.cx-message.cx-them.cx-Agent.cx-agent.cx-NewTextBubble > div.cx-avatar-wrapper > div").empty().append("<img src='dist/images/logouser.png'>");

            jQuery(".btn.enviar_btn").click(function(){
                jQuery('[data-message*="ChatSend"]" ').trigger("click");
                // localWidgetPlugin.command('WebChatService.sendMessage', {
                //     message: jQuery(".cx-textmessage").val("")
                // }).done(function(e){
                //     jQuery(".cx-textmessage").val("");
                // }).fail(function(e){
                // });
            });

            jQuery('[data-message*="ChatSend"]').on(
                            'click',
                            function(event) {
                                localWidgetPlugin.command('WebChatService.sendMessage', {
                                    message: $('.cx-message-input').val()
                                    }).done(function(e){
                                     $('.cx-message-input').val("");
                                    // WebChatService sent a message successfully
                                 
                                }).fail(function(e){
                                });                 
                            }
                    );

            localWidgetPlugin.subscribe('WebChatService.agentConnected', function(e) {
                var agente = "";

                GetSurveyUrl()
                sessionStorage.setItem('chatID', chatID); 
                sessionStorage.setItem("mostrarEncuesta", true);
                localWidgetPlugin.command('WebChatService.getAgents', {
                }).done(function(agents){
                    for(agente in agents.agents){
                        if(agents.agents[agente].name) {
                           agente = agents.agents[agente].name
                        }
                    }

                    localWidgetPlugin.command('WebChat.injectMessage', {
                        type: 'html',
                        name: 'Agent',
                        text: '<span  class="cx-cns-encuesta-text" >Bienvenido al Servicio Chat de BANCOLOMBIA ¿En qué te podemos ayudar?</span>' ,
                        custom: false,
                        bubble: {
                            fill: '#eee',
                            radius: '4px',
                            time: false,
                            name: false,
                            direction: 'left',
                        }
                    }).done(function(e) {
                    }).fail(function(e) {
                    });
                });
                jQuery(".cx-message-input").prop("disabled", false);
                jQuery(".cx-message-input").attr("disabled", false);
                sessionStorage.setItem("mostrarEncuesta", true);
            });

            localWidgetPlugin.subscribe('WebChat.started', function(e){
                GetSurveyUrl();
                emojiAppend();
                jQuery(".cx-message-input").prop("disabled", true);
                jQuery(".cx-message-input").attr("disabled", true);
            });

            localWidgetPlugin.subscribe("WebChat.closed", function(e){
                jQuery("#encuesta_frame").hide();
            })

        localWidgetPlugin.subscribe('WebChat.submitted', function(e){
            if(jQuery('input[type=checkbox]#cx_webchat_box').prop('checked')){
                alert("Hola")
                if(jQuery('input[type=checkbox]').prop('checked') && jQuery("#cx_webchat_form_firstname").val().length != 0 && jQuery("#cx_webchat_form_lastname").val().length != 0){
                    jQuery(".alert_term, .cx-form.cx-form-horizontal").hide();
                    jQuery(".cx-transcript-wrapper, .cx-input-container").show();
                }
            }
            else{
                e.preventDefault();
                jQuery(".alert_term").show();
            }
        });
            /*jQuery('.cx-form-inputs').before("<p class='alert_term'>Por favor acepte los términos y condiciones para continuar</p>");
            jQuery('.cx-submit.cx-btn.cx-btn-primary.i18n').replaceWith("<button type='button' class='cx-btn initBot'>Iniciar Chat</button>")
            jQuery(".initBot").on("click", function(){
                if(jQuery('input[type=checkbox]').prop('checked')){
                    if(jQuery('input[type=checkbox]').prop('checked') && jQuery("#cx_webchat_form_firstname").val().length != 0 && jQuery("#cx_webchat_form_lastname").val().length != 0){
                        jQuery(".alert_term, .cx-form.cx-form-horizontal").hide();
                        jQuery(".cx-transcript-wrapper, .cx-input-container").show();
                    }
                }
                else{
                    jQuery(".alert_term").show();
                }
            })*/

            localWidgetPlugin.subscribe('WebChatService.messageReceived', function(e){
                if(e.data.messages[0].from.type == "Agent" && e.data.messages[0].text != "" && e.data.messages[0].text != "user is typing" && e.data.messages[0].text != "stopped"){
                    newMessageSound();
                }
            });

           

             localWidgetPlugin.subscribe('WebChatService.ended', function(e) {
                var isTrue = sessionStorage.getItem("mostrarEncuesta");
                console.log(isTrue == "true")
                if (isTrue == "true") {
                    jQuery(".cx-body *").hide();
                    jQuery("#encuesta_frame").show();
                    newMessageSound();
                }
             });
        });
    });

 

    let dateCall = "";
    var oMyPlugin = window._genesys.widgets.bus.registerPlugin('MyPlugin');
     
        oMyPlugin.subscribe('Calendar.ready', function(e){
            oMyPlugin.subscribe('Calendar.selectedDateTime', function(e){
                dateCall = e.data.date;
                return dateCall;
        });
    });


    var CXBus = window._genesys.widgets.bus;
    CXBus.subscribe("Callback.opened", function(e){
        jQuery("#cx_form_callback_phone_number").val("");
        jQuery("#cx_form_callback_phone_number").val("");
        jQuery("body > div.cx-widget.ow-modal.cx-desktop.cx-theme-light > div > div.cx-button-container > div.cx-button-group.cx-buttons-binary").append("<button type='submit' onclick='setCall()' class='cx-btn initCall'>Llámame</button>")
    });



    var emailPlugin = window._genesys.widgets.bus.registerPlugin('MyPluginEmail');
     
    emailPlugin.subscribe('SendMessage.ready', function(e){
        emailPlugin.subscribe('SendMessage.completed', function(e){
            $(".cx-form-success").empty().append('<div class="checkmark"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 161.2 161.2" enable-background="new 0 0 161.2 161.2" xml:space="preserve"> '+
                '<path class="path" fill="none" stroke="#7DB0D5" stroke-miterlimit="10" d="M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4 c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5 '+
                ' c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z"/><circle class="path" fill="none" stroke="#7DB0D5" stroke-width="4" stroke-miterlimit="10" cx="80.6" cy="80.6" r="62.1"/><polyline class="path" fill="none" stroke="#7DB0D5" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="113,52.8 74.1,108.4 48.2,86.4 "/><circle class="spin" fill="none" stroke="#7DB0D5" stroke-width="4" stroke-miterlimit="10" stroke-dasharray="12.2175,12.2175" cx="80.6" cy="80.6" r="73.9"/>'+
                '</svg></div><p>¡Mensaje enviado exitosamente!</p>');
        });
    });
};



/*=================================================FUNCIONES COMPLEMENTARIAS=======================*/

function GetSurveyUrl(){
     sessionStorage.setItem('chatID', chatID); 
     sessionStorage.setItem("mostrarEncuesta", "true");
}


function validateInputCall(){
    var nombre = getDataCall('cx_form_callback_firstname');
    var numero = getDataCall('cx_form_callback_phone_number');
    var tiempo = getTimeCall();
    var isTrue;
    if(numero){
        if(numero.length < 9 ){
            return false;
        }
        else isTrue = true;
    }
    else if(nombre == "" || nombre == null || tiempo == undefined || tiempo == null){
        isTrue == false;
    }
    return isTrue;
}


function setCall(){
    if(validateInputCall() == true){
        var settings = {
            "url": "https://gms-chile.crossnet.la/genesys/2/openmedia/CNLAB-webcallback",
            "method": "POST",
            "headers": {
              "content-type": "application/x-www-form-urlencoded",
            },
            "data": {
                "userData[first_name]": getDataCall('cx_form_callback_firstname'),
                "userData[last_name]": getDataCall('cx_form_callback_lastname'),
                "userData[_customer_number]": getDataCall('cx_form_callback_phone_number'),
                "userData[Subject]": getDataCall('cx_form_callback_subject'),
                "userData[email]": getDataCall('cx_form_callback_email'),
                "userData[_desired_time]":getTimeCall(),
            }
        }

        jQuery.ajax(settings).done(function (response) {
            jQuery(".cx-btn.cx-btn-primary.cx-callback-confirm").click();
        //     jQuery(".cx-btn.cx-btn-primary.cx-callback-confirm").trigger("click");
         });
    }
    else{
         M.toast({html: 'Por favor llene los campos de contacto'});
    }
}


var getDataCall = function(inputs){
    inputs = document.getElementById(inputs);
    return inputs.value;
}

var getTimeCall = function(){
    var checkbox = jQuery('input[name="desiredtime"]:checked');
    var dateCall = "";
    var temp;
    if(checkbox.val() == 'desiredtime'){
        dateCall = new Date(formatFecha(getDataCall('cx_form_callback_time')));
    }
    else{
        dateCall = new Date();
    }
    console.log(dateCall)
    return dateCall.toISOString();;
}



var formatFecha = function(fecha){
    var final = "";
    fecha = fecha.split(" ");
    var mes  = fecha[3].replace("0", "");
    var dia = fecha[2];
    var hora = fecha[5].replace("0", "");
    var anio = new Date();
    switch (mes){
        case 'Ene':
            mes = 1;
            break;
        case 'Feb':
            mes = 2;
            break;
        case 'Mar':
            mes = 3;
            break;
        case 'Abr':
            mes = 4;
            break;
        case 'May':
            mes = 5;
            break;
        case 'Jun':
            mes = 6;
            break;
        case 'Jul':
            mes = 7;
            break;
        case 'Ago':
            mes = 8;
            break;
        case 'Sep':
            mes = 9;
            break;
        case 'Oct':
            mes = 10;
            break;
        case 'Nov':
            mes = 11;
            break;
        case 'Dic':
            mes = 12;
            break;
    }
    final =  anio.getFullYear() + "-"+ mes + "-" + dia +" " + hora + " " + fecha[6];
    
    final = new Date(final);
    return final
}


function newMessageSound(){
    document.getElementById("notify_audio").play();
    return 
}

function createAudioTag(){
    var tag = document.createElement("audio");
    tag.setAttribute("id", "notify_audio");
    tag.setAttribute("src", "media/sound.ogg");
    document.body.appendChild(tag);

    var tagO = document.createElement("audio");
    tagO.setAttribute("id", "notify_audioO");
    tagO.setAttribute("src", "media/sound.ogg");
    document.body.appendChild(tagO);
    return;
}

    function emojiAppend(){
        if(miPC == "win7"){
            jQuery(".cx-emoji div").empty();
            jQuery(".cx-emoji div").append(
                '<span class="widget-emoji">😄</span><span class="widget-emoji">😃</span>'+
                '<span class="widget-emoji">😊</span><span class="widget-emoji">😉</span><span class="widget-emoji">😍</span><span class="widget-emoji">😘</span>'+
                '<span class="widget-emoji">😚</span><span class="widget-emoji">😜</span>'+
                '<span class="widget-emoji">😝</span><span class="widget-emoji">😁</span>'+
                '<span class="widget-emoji">😔</span><span class="widget-emoji">😌</span><span class="widget-emoji">😒</span><span class="widget-emoji">😞</span>'+
                '<span class="widget-emoji">😣</span><span class="widget-emoji">😢</span><span class="widget-emoji">😂</span><span class="widget-emoji">😭</span>'+
                '<span class="widget-emoji">😪</span><span class="widget-emoji">😥</span><span class="widget-emoji">😰</span><span class="widget-emoji">😅</span>'+
                '<span class="widget-emoji">😓</span><span class="widget-emoji">😩</span><span class="widget-emoji">😫</span><span class="widget-emoji">😨</span>'+
                '<span class="widget-emoji">😱</span><span class="widget-emoji">😠</span><span class="widget-emoji">😡</span><span class="widget-emoji">😤</span>'+
                '<span class="widget-emoji">😖</span><span class="widget-emoji">😆</span><span class="widget-emoji">😋</span><span class="widget-emoji">😷</span>'+
                '<span class="widget-emoji">😎</span><span class="widget-emoji">😵</span><span class="widget-emoji">😲</span>'+
                '<span class="widget-emoji">😈</span>'+
                '<span class="widget-emoji">👿</span><span class="widget-emoji">😐</span>');
            var textarea = jQuery('.cx-webchat div.cx-input-container .cx-message-input');
            var emojis = document.querySelectorAll('.widget-emoji');
            for(i = 0; i < emojis.length; i++) {
              emojis[i].addEventListener('click', function(e){
                textarea.val(textarea.val() + this.innerHTML);
                jQuery(".cx-open").removeClass("cx-open");
              });
            };
        }
        else{
            jQuery(".cx-emoji div").empty();
            jQuery(".cx-emoji div").append(
            '<span class="widget-emoji">😄</span><span class="widget-emoji">😃</span><span class="widget-emoji">😀</span>'+
            '<span class="widget-emoji">😊</span><span class="widget-emoji">😉</span><span class="widget-emoji">😍</span><span class="widget-emoji">😘</span>'+
            '<span class="widget-emoji">😚</span><span class="widget-emoji">😗</span><span class="widget-emoji">😙</span><span class="widget-emoji">😜</span>'+
            '<span class="widget-emoji">😝</span><span class="widget-emoji">😛</span><span class="widget-emoji">😳</span><span class="widget-emoji">😁</span>'+
            '<span class="widget-emoji">😔</span><span class="widget-emoji">😌</span><span class="widget-emoji">😒</span><span class="widget-emoji">😞</span>'+
            '<span class="widget-emoji">😣</span><span class="widget-emoji">😢</span><span class="widget-emoji">😂</span><span class="widget-emoji">😭</span>'+
            '<span class="widget-emoji">😪</span><span class="widget-emoji">😥</span><span class="widget-emoji">😰</span><span class="widget-emoji">😅</span>'+
            '<span class="widget-emoji">😓</span><span class="widget-emoji">😩</span><span class="widget-emoji">😫</span><span class="widget-emoji">😨</span>'+
            '<span class="widget-emoji">😱</span><span class="widget-emoji">😠</span><span class="widget-emoji">😡</span><span class="widget-emoji">😤</span>'+
            '<span class="widget-emoji">😖</span><span class="widget-emoji">😆</span><span class="widget-emoji">😋</span><span class="widget-emoji">😷</span>'+
            '<span class="widget-emoji">😎</span><span class="widget-emoji">😴</span><span class="widget-emoji">😵</span><span class="widget-emoji">😲</span>'+
            '<span class="widget-emoji">😟</span><span class="widget-emoji">😦</span><span class="widget-emoji">😧</span><span class="widget-emoji">😈</span>'+
            '<span class="widget-emoji">👿</span><span class="widget-emoji">😮</span><span class="widget-emoji">😬</span><span class="widget-emoji">😐</span>'+
            '<span class="widget-emoji">😕</span>');
            var textarea = jQuery('.cx-webchat div.cx-input-container .cx-message-input');
            var emojis = document.querySelectorAll('.widget-emoji');
            for(i = 0; i < emojis.length; i++) {
              emojis[i].addEventListener('click', function(e){
                textarea.val(textarea.val() + this.innerHTML);
                jQuery(".cx-open").removeClass("cx-open");
              });
            };
        }
    }


function find_os_version() { 
    var ua = navigator.userAgent.toLowerCase(); 
    if (ua.indexOf("windows nt 5") != -1 ||  ua.indexOf("windows nt 6.0") != -1) { 
        return 'winXP'; } 
    if (ua.indexOf("windows nt 6.1") != -1) { 
        return 'win7'; } 
    if (ua.indexOf("windows nt 6.2") != -1) { 
        return 'win8'; }
    if (ua.indexOf("windows nt 10") != -1) { 
        return 'win10'; 
    }
    else{
        return "compatible"
    }

} 


$(document).ready(function(){
  $('.sidenav').sidenav();
});