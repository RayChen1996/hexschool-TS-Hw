import { atom, useAtomValue, useSetAtom } from "jotai";

const stepAtom = atom(0);

export default function Test() {
  return (
    <div className=" h-screen">
      Test
      <FormArea />
    </div>
  );
}

function FormArea() {
  const step = useAtomValue(stepAtom);

  switch (step) {
    case 0:
      return <Step1 />;

    case 1:
      return <Step2 />;

    default:
      break;
  }
}

function Step1() {
  const setStep = useSetAtom(stepAtom);
  return (
    <>
      <form>
        <label htmlFor="">輸入手機</label>

        <input type="email" name="" id="" />
        <input
          type="button"
          className=" btn btn-primary"
          value="下一步"
          onClick={() => {
            setStep(1);
          }}
        />
      </form>
    </>
  );
}

function Step2() {
  return (
    <>
      <form>
        <label htmlFor="">輸入姓名</label>

        <input type="email" name="" id="" />
        <input
          type="button"
          className=" btn btn-primary"
          value="下一步"
          onClick={() => {}}
        />
      </form>
    </>
  );
}
