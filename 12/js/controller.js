define(
    'controller', ['model', 'view', 'libs/jquery'],

        function Controller(model, view) {
            var self = this;

            view.elements.addBtn.on('click', addItem);
            view.elements.input.keypress(function(e) {
                if (e.which == 13) {
                    addItem();
                }
            });
            view.elements.listContainer.on('click', '.item-edit', editItem);
            view.elements.listContainer.on('click', '.item-delete', removeItem);

            function addItem() {
                var newItem = view.elements.input.val();
                model.addItem(newItem);
                view.renderList(model.data);
                view.elements.input.val('');
            }

            function editItem() {
                var item = $(this).attr('data-value');
                var editField = $(`<input type="text" class="item-editField" value="${item}">`);
                var editBtn = $(`<img src="img/edit.svg">`);
                $(this).parent().html('').append(editField).append(editBtn);
                editBtn.on('click', function() {
                    model.editItem(item, editField.val());
                    view.renderList(model.data);
                });
            }

            function removeItem() {
                var item = $(this).attr('data-value');
                model.removeItem(item);
                view.renderList(model.data);
            }

        }


);
