import { useState } from "react";
import PintarError from "./PintarError";

const Formulario = () => {

    const [todo, setTodo] = useState({
        todoName: '',
        todoDescripcion: '',
        todoEstado: 'pendiente',
        todoCheck: false
    });
// Pequeña validacion
    const [error,setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

const {todoName, todoDescripcion} =todo

if( !todoDescripcion.trim() || !todoName.trim()) {
    setError(true);
    return;
}
setError(false);

        console.log(todo);
// Pequeño reseteo
        setTodo({
            todoName: '',
            todoDescripcion: '',
            todoEstado: 'pendiente',
            todoCheck: false 
        });
    };
    // Objetos literales
    const handleChange = e => {
        console.log(e.target.type);

        const { name, value, checked, type } = e.target

        setTodo({
            ...todo,
            [name]:
                type === "checkbox"
                    ? checked
                    : value,
        })
        // setTodo((old) => ({
        //     ...old,
        //     [e.target.name]: e.target.value,
        // }

        // ))
    };


    return (
        <>
            <h2>Formulario controlado</h2>

{
    error && <PintarError/>
}

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Ingrese Todo"
                    name="todoName"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={todo.todoName}
                />

                <textarea
                    name="todoDescripcion"
                    className="form-control mb-2"
                    placeholder="Ingrese descripcion del Todo"
                    onChange={handleChange}
                    value={todo.todoDescripcion}
                />

                <select
                    name="todoEstado"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={todo.todoEstado}
                >
                    <option value="pendiente">Pendiente🙃</option>
                    <option value="completada">Completada😁</option>
                </select>

                <div className="form-check">
                    <input
                        id="flexCheckDefault"
                        className="form-check-input"
                        type="checkbox"
                        name="todoCheck"
                        checked={todo.todoCheck}
                        onChange={handleChange}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault">
                        Dar prioridad
                    </label>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Agregar
                </button>

            </form>
        </>
    )
};

export default Formulario;
