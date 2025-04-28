
const Tests = () => {
  return (
    <div className="grid grid-cols-2 my-10 divide-x padding">
      <div>
        <h1 className="pb-4 font-medium text-primary-500 typography-h2">
          Tests for men
        </h1>
        <ul className="space-y-[0.66rem] pr-5 pl-5 text-text-400 list-disc typography-paragraph-regular">
          <li>Blood Tests – for hormone level and ovulation check</li>
          <li>
            Hysterosalpingography – to check possible fallopian tubal blockage
          </li>
          <li>
            Hysteroscopy – view reproductive organs internally with camera
            attached to flexible tube
          </li>
          <li>
            Ovarian Reserve Testing – finds out how effective eggs are after
            ovulation
          </li>
          {/* <li>
            Chlamydia Test – to check for sexually transmitted bacterial
            infection
          </li> */}
        </ul>
      </div>
      <div className="pl-10">
        <h1 className="pb-4 font-medium text-primary-500 typography-h2">
          Tests for women
        </h1>
        <ul className="space-y-[0.66rem] pl-5 text-text-400 list-disc typography-paragraph-regular">
          <li>
            Semen Analysis – used to test sperm concentration, motility,etc.
          </li>
          <li>Blood Test – for hormone and testosterone level</li>
          <li>
            Ultrasound – to reveal issues such as ejaculatory duct obstruction
            or retrograde ejaculation
          </li>
          <li>
            Chlamydia Test – to check for sexually transmitted bacterial
            infection
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Tests