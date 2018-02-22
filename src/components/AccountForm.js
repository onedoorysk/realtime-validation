import React from 'react'
import ErrorList from './ErrorList'

export default ({validate, errorList}) => {
  let input = null
  return (
    <div>
      <div className="account">
        <div className="data">アカウントを作成</div>
        <div>
          <input 
            ref={node => input = node} 
            placeholder="４文字以上８文字以内で入力してください。"
            className="form-box" 
            type="text" 
            onChange = {() => validate(input.value)} 
          />
          <ErrorList errorList={errorList} />
        </div>
      </div>
    </div>
  )
}