import {Field} from './Field';
import {Button} from './Button';

export const Form = ({submitHandle}) => {
    return (
        <form className="form" onSubmit={submitHandle}>
            <Field name="name" label="Name" type="text" />
            <Button title="Submit" type={"submit"} />
        </form>
    );
}