var StanfordSlateEnhancements = StanfordSlateEnhancements || (function(){
    var _args = {}; // private

    return {
        init : function(Args) {
            _args = Args;
            // If there are arguments then load the features they want.
            // Otherwise load all the features.
            if (_args) {
                _args.forEach(function(item, index) {
                    switch (item) {
                        case "classify":
                            this.cassify();
                            break;
                            
                        case "dialog":
                            this.dialog();
                            break;

                        case "selectSearch":
                            this.selectSearch();
                            break;

                        case "showHide":
                            this.showHide();
                            break;
                        
                        default:
                            console.log(item + " is not a valid option");
                    }
                });
            }
            else {
                this.selectSearch();
                this.dialog();
                this.showHide();
            }
        },
        classify: function() {
            var classes = [];

            // ======  Add path classes ======
            let path = window.location.pathname.substring(1);
            if (path.endsWith('/')) {
                path = path.slice(0, -1);
            }

            // Replace slashes with hyphens to build our class.
            let pathString = 'path-' + path.replace(/\//g, '-');
            
            // If it's a form add the form id to the class. 
            let pathParts = path.split('/');
            if (pathParts[pathParts.length -1] == 'frm') {
                let urlParams = new URLSearchParams(window.location.search);
                for (var key of urlParams.keys()) {
                pathString += '-' + key;
                break;
                }
            }

            classes.push(pathString);

            // Add an application path on the application pages.
            if (pathParts.length > 1 && pathParts[0] == 'apply' && pathParts[pathParts.length - 1] !== 'status') {
                classes.push('application');
            }

            // Add a slate-form class on the slate pages.
            if (pathParts[0] == 'register') {
                classes.push('slate-form');
            }

            // ===== End Path Classes =====

            // ===== Logged In Class =====
            if ($('#global a[href^="/account/logout"]').length || $('#global a[href^="/manage/logout"]').length) {
                classes.push('logged-in');
            }
            else {
                classes.push('not-logged-in');
            }
            // ===== End Logged In Class =====

            var classString = classes.join(' ');

            $('body').addClass(classString);

            // Add a class for the application-list table.
            if (classes.includes('path-apply') && classes.includes('logged-in')) {
                $('#start_application_link').parent().prev().addClass('application-list');
            }
        },
        dialog : function() {
            // TODO: This should be able to run on popups as well. Will need an observer.
            // Find all dialogs
            $("[data-sse-dialog]").each(function() {
                let $link = jQuery(this);
                let dialogID = $link.attr('data-sse-dialog');
                let $dialog = $('#' + dialogID);

                // Hide the dialog
                $dialog.hide();

                // Add dialog class
                $dialog.addClass('dialog');

                // Create the close button and make it close on click.
                let $dialogClose = $('<button class="default" type="button">Close</button>');
                $dialogClose.on('click', function(e) {
                    e.preventDefault();
                    FW.Dialog.Unload();
                });

                // Add the close button to the end of the dialog.
                $('<div class="action"></div>').appendTo($dialog).append($dialogClose);
            
                // Open the dialog when the link is clicked.
                $link.on('click', function(e) {
                    e.preventDefault();
                    FW.Dialog.Load($dialog);
                });
            });
        },
        selectSearch : function() {
            // TODO: This should be able to run on popups as well. Will need an observer.
            // Get the select2 javascript file and load it in the header.
            $.getScript("https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js", function( data, textStatus, jqxhr ) {
                // Add it to our header so we can use it.
                $('<link>').appendTo('head').attr({
                    type: 'text/css',
                    rel: 'stylesheet',
                    href: 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css'
                });
                
                // Run it on every span that has the class sse-search-select
                $('span.sse-select-search').each(function() {
                    $(this).closest('.form_select').find('.form_responses select').select2();
                });
            });
                
            $(document).on('select2:open', () => {
                let allFound = document.querySelectorAll('.select2-container--open .select2-search__field');
                $(this).one('mouseup keyup',()=>{
                setTimeout(()=>{
                    allFound[allFound.length - 1].focus();
                },0);
                });
            });
        },
        showHide : function() {
            // TODO: This should be able to run on popups as well. Will need an observer.
            // Find all the showhide links.
            $("[data-sse-showhide]").each(function() {
                let $link = jQuery(this);
                let showHideID = $link.attr('data-sse-showhide');
                let $showHide = jQuery('#' + showHideID);

                // Hide the text initially
                $showHide.hide();

                // Hide and show depending on the current state.
                $link.attr('aria-expanded', 'false');
                $link.on('click', function(e) {
                    e.preventDefault();
                    if ($link.attr('aria-expanded') == "true") {
                        $link.attr('aria-expanded', 'false');
                        $showHide.hide();
                    }
                    else {
                        $link.attr('aria-expanded', 'true');
                        $showHide.show();
                    }
                });
            });
        }
    };
}());
