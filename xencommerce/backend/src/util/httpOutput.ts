export class HttpOutput {
  public data?: any;
  public message?: string;
  public totalPage?: number;
  public additionalData?: any;
  public currentPage?: number;
  public status?: string;
  constructor(
    status?: string,
    message?: string,
    data?: any,
    currentPage?: number,
    totalPage?: number,
    additionalData?: any
  ) {
    this.data = data;

    if (currentPage) {
      this.currentPage = currentPage;
    }

    if (totalPage) {
      this.totalPage = totalPage;
    }
    this.additionalData = additionalData;
    this.message = message;
    this.status = status;
  }
}