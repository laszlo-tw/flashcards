import { useState, useEffect, useRef } from 'react';
import { EditCellProps } from "../types";

const EditCell : React.FC<EditCellProps> = ({value, onSave}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editingValue, setEditingValue] = useState(value);
    const inputRef = useRef<HTMLInputElement>(null);

    // enter editing mode
    const handleClick = () => {
        setIsEditing(true);
        setEditingValue(value);
    }

    // save and exit editing mode
    const handleSave = () => {
        onSave(editingValue); // defined in parent component, passed in as prop
        setIsEditing(false);
    }

    // save if return key is pressed
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSave();
        }
    }

    // save if the user clicks anywhere outside of the cell
    // blur handles the user clicking on focusable elements, this handles the user clicking on non-focusable elements
    useEffect(() => { // runs after the component renders
        const handleClickOutside = (event: MouseEvent) => {
            if (inputRef.current && !inputRef.current.contains(event.target as Node)) { // inputRef.current checks if the input element exists
                handleSave();
            }
        };

        if (isEditing) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => { // cleanup function that runs when the components unmount or before the effect runs again when dependencies change
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isEditing, editingValue]); // dependencies: re-run the effect whenever these values change

    return(
        <td onClick = {handleClick}>
            {isEditing ? (
                <input
                ref={inputRef}
                type="text"
                value={editingValue}
                onChange={(e) => setEditingValue(e.target.value)}
                onBlur={handleSave}
                onKeyDown={handleKeyDown}
                autoFocus
                />
            ): (
                value
            )}
        </td>
    );
}

export default EditCell;