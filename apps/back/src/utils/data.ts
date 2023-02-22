import { RoomData } from "types";
import { BaseActionObject, Interpreter, ResolveTypegenMeta, ServiceMap, TypegenDisabled } from "xstate";

export const boards = new Map<string, RoomData>()
export const stateMachines = new Map<string, Interpreter<unknown, any, {type: "START"} | {type: "END_PHASE"} | {type: "STOP"}, {value: any, context: unknown}, ResolveTypegenMeta<TypegenDisabled, {type: "START"} | {type: "END_PHASE"} | {type: "STOP"}, BaseActionObject, ServiceMap>>>()
export const userMoved = new Map<string, number[]>()
