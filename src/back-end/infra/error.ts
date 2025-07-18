interface CustomErrorParams {
  message?: string;
  cause?: unknown;
  statusCode?: number;
}

export class InternalServerError extends Error {
  public readonly name: string = "InternalServerError";
  public readonly action: string = "Entre em contato com o suporte.";
  public readonly statusCode: number;

  constructor({ cause, statusCode }: CustomErrorParams) {
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

export class ServiceError extends Error {
  public readonly name: string = "ServiceError";
  public readonly action: string = "Verifique se o serviço está disponível.";
  public readonly statusCode: number = 503;

  constructor({ cause, message }: CustomErrorParams) {
    super(message || "Serviço indisponível no momento.", {
      cause,
    });

    // Corrige a cadeia de protótipos para que o instanceof funcione corretamente
    Object.setPrototypeOf(this, ServiceError.prototype);
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

export class MethodNotAllowedError extends Error {
  public readonly name: string = "MethodNotAllowedError";
  public readonly action: string =
    "Verifique se o método HTTP enviado é válido para este endpoint.";
  public readonly statusCode: number = 405;

  constructor() {
    super("Método não permitido para este endpoint.");

    Object.setPrototypeOf(this, MethodNotAllowedError.prototype);
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
