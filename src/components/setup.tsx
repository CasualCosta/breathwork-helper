import SetupInput from "./SetupInput"

const Setup = () => {
  return (
    <div>
      <SetupInput type="roundAmount" />
      <SetupInput type="breathCount" />
      <SetupInput type="breathInterval" />
    </div>
  )
}

export default Setup