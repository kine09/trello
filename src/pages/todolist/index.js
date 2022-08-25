import { useSelector, useDispatch } from "react-redux";
import {
  setInputElement,
  addElement,
  deleteElement,
  setInputTodo,
  addTodo,
} from "../../store/reducer/element";
import "../todolist/todolist.css";

function TodoList() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const todoListRender = state.element.elementList.elementData;
  function debounce(func, delay) {
    let timeout;

    return function executedFunc(...args) {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        func(...args);
        timeout = null;
      }, delay);
    };
  }

  function getValueTest(e) {
    console.log(e.target.value);
    console.log(e);
  }
  const handleFc = debounce(getValueTest, 500);

  return (
    <div>
      <header>
        <input
          onChange={(e) => {
            handleFc(e);
          }}
        />
      </header>
      <div>
        <input
          type="text"
          placeholder="them danh sach"
          value={state.element.input}
          onChange={(e) => {
            const value = e.target.value;
            dispatch(setInputElement(value));
          }}
        />
        <button
          onClick={() => {
            dispatch(addElement());
          }}
        >
          Add
        </button>
        <ul style={{ listStyleType: "none" }}>
          {state.element.elementList.map((element) => {
            return (
              <li id={element.id} key={element.id}>
                <div className="item__header">
                  <p className="item__title">{element.value}</p>
                  <button
                    onClick={() => {
                      if (window.confirm("xác nhận xóa trường này") == true) {
                        dispatch(deleteElement(element.id));
                      }
                    }}
                  >
                    x
                  </button>
                </div>

                <div>
                  <input
                    id={element.id}
                    type="text"
                    placeholder="..."
                    onChange={(e) => {
                      const params = {
                        value: e.target.value,
                        inId: e.target.id,
                      };
                      dispatch(setInputTodo(params));
                    }}
                  />
                  <button
                    onClick={() => {
                      dispatch(addTodo());
                    }}
                  >
                    +
                  </button>
                  <ul>
                    {todoListRender?.map((todo) => {
                      return (
                        <li>
                          <div>
                            <p>{todo.value}</p>
                            <button>x</button>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
