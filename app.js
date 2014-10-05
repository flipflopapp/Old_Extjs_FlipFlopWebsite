Ext.Loader.setConfig({enabled:true});
Ext.Loader.setPath({
    'Ext': 'extjs/src',
});

Ext.require([
    'Ext.container.Viewport',
    'Ext.window.MessageBox'
]);

Ext.application({
    name: 'FlipFlop',

    launch: function() {
      var me = this;
      window.setTimeout ( function() {
         me.startApp();
      }, 2000 );
    },

    startApp: function() {
      //Destroy the #appLoadingIndicator element
      //Ext.fly('appLoadingIndicator').destroy();
      Ext.fly('appLoadingSplash').destroy();

      if ( Ext.isIE6 || Ext.isIE7 || Ext.isIE8 || Ext.isIE9 ) {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
//            layoutConfig: {
//                minHeight: 800,
//            },
            autoScroll: true,
            items: [
                {
                    xtype: 'container',
    		        height: '100%',
                    cls: 'mainbody',
                    html: 'main',
                    autoScroll: true,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        introduction,
                        contactus
                    ]
                }
            ]
        });
        Ext.MessageBox.alert('Browser not supported', 'Your version of Internet Explorer (IE) is not supported. <br><br>Please open this website in a IE version ( >10 ) or try some other browser.'); 
      } else { 
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
//            layoutConfig: {
//                minHeight: 800,
//            },
            autoScroll: true,
            items: [
                {
                    xtype: 'container',
    		        height: '100%',
                    cls: 'mainbody',
                    html: 'main',
                    autoScroll: true,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        introduction,
                        technologies,
//                        careers,
                        contactus
                    ]
                }
            ]
        });    
      }
    }
});

introduction = Ext.create('Ext.panel.Panel', {
    width: 900,
    height: '100%',
    cls: 'boxOne',
    layout: 'border',
    
    items: [
        {
            region: 'east',
            xtype: 'container',
//            padding: '80 65 80 65',
            padding: '145 65 80 65',
            items: [
//                {
//                    xtype: 'panel',
//                    html: '<a href="www.flipflopapp.com"><img src="images/ff-logo.png" /></a>',
//                    style: 'float: right; clear: both;',
//                    padding: '0 0 65 0'
//                },
                {
                    xtype: 'label',
//                    html: '<a class="intro_head1" href="http://flipflopapp.blogspot.in/" target="_blank">The Art<br>of web and mobility<br><span class="small">Click to read blog</span></a>',
                    html: '<a class="intro_head1" href="https://github.com/flipflopapp?tab=repositories" target="_blank">The Art<br>of web and mobility<br><span class="small">We are on GitHub</span></a>',
                    style: 'float: right; clear: both; text-align: right;',
                    padding: '0 0 65 0'
                },
                {
                    xtype: 'label',
                    html: '<a class="intro_head2" href="./flipflop-profile.pdf" target="_blank">Work portfolio<br><span class="medium">of Flip Flop</span></a>',
                    style: 'float: right; clear: both; text-align: right;'
                }
            ]
        }
    ]
});

technologies = Ext.create('Ext.panel.Panel', {
    width: 950,
    height: '100%',
    cls: 'boxEven',
    //layout: 'hbox',
    
    items: [
        {
            xtype: 'image',
            src: 'images/overview_mobile.png',
            padding: '80 0 80 65'
        },
        {
            xtype: 'panel',
// bug-fix below lines (occurs when we open website for the first time)
            //width: 900,
            width: 600,
            height: 600,
            //padding: '80 65 80 65',
            style: 'position: absolute !important; left: 365px; top: 80px;', 
            cls: 'overlap_pages',
            items: [
                {
                    xtype: 'label',
                    cls: 'techno_head',
                    text: 'Technologies'
                },
                {
                    xtype: 'panel',
                    height: '100%',
                    items: [
                        {
                            xtype: 'label',
                            cls: 'techno_matter',
                            html: [
                                'NodeJs and No-SQL databases powered web applications.',
                                '<br><br>',
                                'HTML5 technologies (Sencha Touch, Backbone and Angular).',
                                '<br><br>',
                                'Android applications.'
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});

careers = Ext.create('Ext.panel.Panel', {
    xtype: 'panel',
    width: 415,
    height: '100%',
    cls: 'boxEven',  
    
    items: [
        {
            xtype: 'panel',
            height: '100%',
            width: 1150,
            padding: '80 65 80 65',
            cls: 'overlap_pages',
            items: [
                {
                    xtype: 'label',
                    cls: 'careers_head1',
                    html: 'Careers',
                    style: 'float: left; text-align: left;'
                },
                {
                    xtype: 'image',
                    margin: '60 20 0 20',
                    cls: 'careers_chain', 
                    src: 'images/chain.png',
                    style: 'float: left;'
                },
                {
                    xtype: 'label',
                    cls: 'careers_head2',
                    html: 'Connect',
                    style: 'float: left; text-align: left;'
                },
                {
                    xtype: 'panel',
                    height: '100%',
                    width: '80%',
                    style: 'float: left; clear: both;',
                    items: [
                        {
                            xtype: 'label',
                            cls: 'careers_matter',
                            html:[
                                'We are product engineers.<br><br>',
                                'We collaborate to build great products.<br>',
                                'We are driven to create and share knowledge, to raise the bar.<br><br>',
                                'And we need people who can plan breaks and balance work and life. ',
                                'Have the matching skills! Would like to work with us! ',
                                'Write to us.'
                               ]
                        }
                    ]
                }
            ]
        }
    ]
});

contactus = Ext.create('Ext.panel.Panel', {
    xtype: 'panel',
    width: 450,
    height: '100%',
    cls: 'boxOdd',  
    
    items: [
        {
            xtype: 'panel',
            height: '100%',
            style: 'float: right;',
            padding: '80 65 80 0',
            items: [
                {
                    xtype: 'label',
                    cls: 'contactus_head',
                    html: 'Contact:',
                    style: 'float: right; clear: both;'
                },
                {
                    xtype: 'panel',
                    style: 'float: right; clear: both;',
                    items: [
                        /*{
                            xtype: 'label',
                            cls: 'contactus_matter',
                            text: '125/1, 3rd Floor,'
                        },
                        {
                            xtype: 'label',
                            cls: 'contactus_matter',
                            text: 'Shahpur Jat, Hauz Khas,'
                        },*/
                        {
                            xtype: 'label',
                            cls: 'contactus_matter',
                            html: 'NAVAL SAINI <br> (New Delhi, India)'
                        },
                        {
                            xtype: 'label',
                            cls: 'contactus_matter',
                            html: 'Skype: navalsaini <br>' +
                                  'Mail: flipflopapps@gmail.com <br>' +
                                  'Phone: +91-9560375909'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    width: '100%',
                    height: 51,
                    style: 'float: right; clear: both;',
                    items: [
                        /*
                        {
                            xtype: 'image',
                            src: 'images/pinterest-button.png',
                            cls: 'contactus_foot_btn',
                            overCls: 'showlink',
                            listeners: {
                                click: {
                                    element: 'el',
                                    fn: function() { window.open ( 'http://pinterest.com/navalsaini/flipflopapp' ); }
                                }
                            }
                        },
                        */
                        {
                            xtype: 'image',
                            src: 'images/github-button.png',
                            cls: 'contactus_foot_btn',
                            overCls: 'showlink',
                            listeners: {
                                click: {
                                    element: 'el',
                                    fn: function() { window.open ( 'https://github.com/flipflopapp' ); }
                                }
                            }
                        }
                    ]
                }, 
                {
                    xtype: 'panel',
                    width: '100%',
                    style: 'float: right; text-align: right;',
                    padding: '30 0 0 0',
                    html: '<a class="creditslink" href="http://www.avokado.co.in/" target="_blank">Designed by Avokado ©</a>'
                }
            ]
        }
    ]
});
