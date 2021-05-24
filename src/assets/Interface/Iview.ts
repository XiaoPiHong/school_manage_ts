//表单
namespace Iview {
  export class ValidateForm {
    startTime: string = ''
    endTime: string = ''
  }

  export class SelectComForm {
    city: number = 0
    text: string | number = ''
  }

  export class InputComForm {
    num: number | string = 0
  }

  export class InputNumberForm {
    num: number | null = null
  }

  export interface RenderComList {
    Id: number,
    cols2: string,
    cols3: string,
    cols4: string,
  }
}
export default Iview