import SetupInput from "./SetupInput"

const Setup = () => {
  return (
    <div>
      <SetupInput type="roundAmount" />
      <SetupInput type="breathCount" />
      <SetupInput type="breathSpeed" />
    </div>
  )
}

export default Setup