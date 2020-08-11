import { Definition } from "../Schema/Definition";
import { SubTypeFormatter } from "../SubTypeFormatter";
import { BaseType } from "../Type/BaseType";
import { FunctionType } from "../Type/FunctionType";

export class FunctionTypeFormatter implements SubTypeFormatter {
    public supportsType(type: FunctionType): boolean {
        return type && type.getId && type.getId() === "function";
    }
    public getDefinition(type: FunctionType): Definition {
        return { type: undefined };
    }
    public getChildren(type: FunctionType): BaseType[] {
        return [];
    }
}
