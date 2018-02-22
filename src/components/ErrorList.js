import React from 'react'
import ErrorMessage from './ErrorMessage'

const errorMessages = {
  required: '必須項目です。',
  length: '４文字以上８文字以内で入力してください。',
}

export default ({errorList}) => {
  return (
    <ul>
      {errorList.map(error => 
        <ErrorMessage errorStr={errorMessages[error]} />
      )}
    </ul>
  )
}