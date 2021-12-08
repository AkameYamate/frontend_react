(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[129],{2974:function(e,t,a){"use strict";a.r(t),t.default="const locale = {\n\tAPP_TITLE: 'Mailbox',\n\tCOMPOSE: 'COMPOSE',\n\tFOLDERS: 'FOLDERS',\n\tFILTERS: 'FILTERS',\n\tLABELS: 'LABELS',\n\tNO_MESSAGES: 'There are no messages!',\n\tSEARCH_PLACEHOLDER: 'Search for an e-mail or contact',\n\tINBOX: 'Inbox',\n\tSENT: 'Sent',\n\tDRAFTS: 'Drafts',\n\tSPAM: 'Spam',\n\tTRASH: 'Trash',\n\tSTARRED: 'Starred',\n\tIMPORTANT: 'Important'\n};\n\nexport default locale;\n"},2975:function(e,t,a){"use strict";a.r(t),t.default="import i18next from 'i18next';\nimport React from 'react';\nimport { Redirect } from 'react-router-dom';\nimport ar from './i18n/ar';\nimport en from './i18n/en';\nimport tr from './i18n/tr';\n\ni18next.addResourceBundle('en', 'mailApp', en);\ni18next.addResourceBundle('tr', 'mailApp', tr);\ni18next.addResourceBundle('ar', 'mailApp', ar);\n\nconst MailAppConfig = {\n\tsettings: {\n\t\tlayout: {}\n\t},\n\troutes: [\n\t\t{\n\t\t\tpath: [\n\t\t\t\t'/apps/mail/label/:labelHandle/:mailId?',\n\t\t\t\t'/apps/mail/filter/:filterHandle/:mailId?',\n\t\t\t\t'/apps/mail/:folderHandle/:mailId?'\n\t\t\t],\n\t\t\tcomponent: React.lazy(() => import('./MailApp'))\n\t\t},\n\t\t{\n\t\t\tpath: '/apps/mail',\n\t\t\tcomponent: () => <Redirect to=\"/apps/mail/inbox\" />\n\t\t}\n\t]\n};\n\nexport default MailAppConfig;\n"},3088:function(e,t,a){"use strict";a.r(t);var n=a(143),o=a(200),l=a(1553),r=a(245),c=a(0),s=a.n(c);t.default=function(){return s.a.createElement(o.a,{header:s.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},s.a.createElement("div",{className:"flex flex-col"},s.a.createElement("div",{className:"flex items-center mb-16"},s.a.createElement(l.a,{className:"text-18",color:"action"},"home"),s.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),s.a.createElement(r.a,{color:"textSecondary"},"Documentation"),s.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),s.a.createElement(r.a,{color:"textSecondary"},"Working with Fuse React")),s.a.createElement(r.a,{variant:"h6"},"Multi Language"))),content:s.a.createElement("div",{className:"p-24 max-w-2xl"},s.a.createElement(r.a,{className:"mb-16",component:"p"},"Fuse React uses",s.a.createElement("a",{href:"https://react.i18next.com/",target:"_blank",rel:"noopener noreferrer",className:"font-bold"},s.a.createElement("code",null,"react-i18next")),"for to support multiple languages."),s.a.createElement(r.a,{className:"mb-16 p-16 border-1 bg-yellow-50 rounded-8 text-gray-800",component:"p"},"Since not everybody need multi-language setup for their apps, we decided NOT to put translations everywhere. If you want to see the translations in action, visit Mail app and then change the language from the Toolbar. Mail app is the only app that has translations for demonstration purposes. You can look at its source code to see the usage."),s.a.createElement(r.a,{className:"mb-8",variant:"h5"},"Usage"),s.a.createElement(r.a,{className:"mb-16",component:"p"},"In order to use the translations, create your translation file within the folder you want to use the translations. For example, for the Mail app, create ",s.a.createElement("code",null,"i18n/en.js")," file inside the",s.a.createElement("code",null,"apps/mail")," folder."),s.a.createElement(n.a,{component:"pre",className:"language-jsx mb-24"},a(2974)),s.a.createElement(r.a,{className:"mb-16",component:"p"},"And register the language file with ",s.a.createElement("code",null,"i18next.addResourceBundle()")," at",s.a.createElement("code",null,"src/app/main/apps/mail/MailAppConfig.js")),s.a.createElement(n.a,{component:"pre",className:"language-jsx mb-24"},a(2975)),s.a.createElement(r.a,{className:"mb-16",component:"p"},"And use in a component with ",s.a.createElement("code",null,"useTranslation")," hook as below:"),s.a.createElement(n.a,{component:"pre",className:"language-jsx mb-24"},'\n                        import {useTranslation} from \'react-i18next\';\n\n                        const {t} = useTranslation(\'mailApp\');\n                    \n                        return (\n                            <div className="p-24">\n                                <Button\n                                    variant="contained"\n                                    color="primary"\n                                    className="w-full"\n                                    onClick={handleOpenDialog}\n                                >\n                                    {t(\'COMPOSE\')}\n                                </Button>\n                        '),s.a.createElement(r.a,{className:"mb-8",variant:"h5"},"Changing Language"),s.a.createElement(r.a,{className:"mb-16",component:"p"},"You can also use ",s.a.createElement("code",null,"useTranslation")," hook to change language:"),s.a.createElement(n.a,{component:"pre",className:"language-jsx mb-24"},"\n                            import {useTranslation} from 'react-i18next';\n\n                            const {i18n} = useTranslation();\n\n                            i18n.changeLanguage('en');\n                        "),s.a.createElement(r.a,{className:"mb-16",component:"p"},"Checkout example usage at",s.a.createElement("code",null,"src/app/fuse-layouts/shared-components/LanguageSwitcher.js")))})}}}]);