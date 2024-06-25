export default function Input({ prop, type, value, onBlur, placeholder, readOnly }) {
  placeholder = placeholder ? prop.properties.displayName + prop.properties.postfixObject + ' 입력해주세요.' : '';
  readOnly = !!readOnly;


  return (
      <div className="mb-4">
        <div className="flex">
          <label className="content-center w-1/4" htmlFor={ prop.state.name }>
            { prop.properties.displayName }
          </label>
          <input name={ prop.state.name }
                 type={ type }
                 className={ getClassName(readOnly) }
                 value={ value }
                 onChange={ prop.actions.inputChangeHandler }
                 onBlur={ onBlur ? prop.actions.inputBlurHandler : null }
                 placeholder={ placeholder }
                 readOnly={ readOnly }
          />
        </div>
        <div className="flex">
          <div className="w-1/4"></div>
          <div className="w-full max-w-96 h-4 mx-2 pr-2 pl-4 text-left text-red-500">{ prop.message.value }</div>
        </div>
      </div>
  );
}
const getClassName = (readOnly) => {
  let className =
      'w-full max-w-96 ' +
      'mx-2 border border-gray-300 rounded-md p-2 pl-4 ' +
      'focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
  if (readOnly) {
    className += ` bg-gray-200`;
  }
  return className;
}
