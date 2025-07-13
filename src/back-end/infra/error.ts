interface InternalServerErrorParams {
  cause?: unknown;
  statusCode?: number;
}

export class InternalServerError extends Error {
  public readonly name: string = "InternalServerError";
  public readonly action: string = "Entre em contato com o suporte.";
  public readonly statusCode: number;

  constructor({ cause, statusCode }: InternalServerErrorParams) {
    super("Um erro interno não esperado aconteceu.", {
      cause,
    });
    this.statusCode = statusCode || 500;

    // Corrige a cadeia de protótipos para que o instanceof funcione corretamente
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}
