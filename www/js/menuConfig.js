var menu_storage_key = 'menu_items_off';
    var menu_items_off = new Array();

    if ('localStorage' in window && window['localStorage'] !== null) {
        var storage = window.localStorage;
    }

    $(document).ready(function() {
        $('.menu-toggle').click(function () {
            if ($(this).html() == 'On') {
                $(this).html('Off');
                if(menu_items_off.indexOf($(this).data('menuhead')) < 0) {
                    menu_items_off.push($(this).data('menuhead'));
                }
            } else {
                $(this).html('On');
                $('#' + $(this).data('menuhead')).show();
                $('.' + $(this).data('menuhead')).show();
                var new_array = new Array();
                if(menu_items_off.indexOf($(this).data('menuhead')) >= 0) {
                    for (i=0; i < menu_items_off.length; i++) {
                        if(menu_items_off[i] != $(this).data('menuhead')) {
                            new_array.push(menu_items_off[i]);
                        }
                    }
                    menu_items_off = new_array;
                }
            }
            persist_data(menu_storage_key, menu_items_off);
            update_menu();
        });

        // running on document load
        load_menu_storage();
        update_menu();
        update_toggles();
    });

    function load_menu_storage() {
        // check to see if value exists
        if(storage.getItem(menu_storage_key) == null) {
            // if it doesn't exist, set it to empty array and return
            persist_data(menu_storage_key, new Array());
            return;
        }
        menu_items_off = get_data(menu_storage_key);
    }

    function update_menu() {
        // value exists, iterate through and set items off
        for (i=0; i < menu_items_off.length; i++) {
            $('#' + menu_items_off[i]).hide();
            $('.' + menu_items_off[i]).hide();
        } 
    }

    function update_toggles() {
        // value exists, iterate through and set items off
        for (i=0; i < menu_items_off.length; i++) {
            $('.menu-toggle').each(function() {
                if(menu_items_off[i] == $(this).attr('data-menuhead')) {
                    $(this).html('Off');
                    $(this).addClass('active');
                }
            });
        }
    }

    function persist_data(key, data) {
        storage.setItem(key, JSON.stringify(data));
    }

    function get_data(key) {
        return JSON.parse(storage.getItem(key));
    }
$(document).ready(function() {
    $("#open-left").click(function(){
    if( snapper.state().state=="left" ){
        snapper.close();
    } else {
        snapper.open('left');
    }
    });
});


