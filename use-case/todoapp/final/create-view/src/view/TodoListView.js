import { element } from "./html-util.js";
import { TodoItemView } from "./TodoItemView.js";

export class TodoListView {
    /**
     * `todoItems`に対応するTodoリストのHTML要素を作成して返す
     * @param {TodoItemModel[]} todoItems TodoItemModelの配列
     * @param {function({id:string, completed: boolean})} onUpdateTodo チェックボックスの更新イベントリスナー
     * @param {function({id:string)}} onDeleteTodo 削除ボタンのクリックイベントリスナー
     * @returns {HTMLElement} TodoItemModelの配列に対応したリストのHTML要素
     */
    createElement(todoItems, { onUpdateTodo, onDeleteTodo }) {
        const todoListElement = element`<ul />`;
        // todoItemsに対応するアイテム要素を作りリストへ追加する
        todoItems.forEach(todoItem => {
            const todoItemView = new TodoItemView();
            // todoItemに対応したHTML要素を作成する
            const todoItemElement = todoItemView.createElement(todoItem, {
                onDeleteTodo,
                onUpdateTodo
            });
            todoListElement.appendChild(todoItemElement);
        });
        // todoListElementを返す
        return todoListElement;
    }
}
