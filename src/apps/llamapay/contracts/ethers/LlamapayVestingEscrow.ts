/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface LlamapayVestingEscrowInterface extends utils.Interface {
  functions: {
    'initialize(address,address,address,uint256,uint256,uint256,uint256)': FunctionFragment;
    'unclaimed()': FunctionFragment;
    'locked()': FunctionFragment;
    'claim()': FunctionFragment;
    'claim(address)': FunctionFragment;
    'claim(address,uint256)': FunctionFragment;
    'rug_pull()': FunctionFragment;
    'commit_transfer_ownership(address)': FunctionFragment;
    'apply_transfer_ownership()': FunctionFragment;
    'renounce_ownership()': FunctionFragment;
    'collect_dust(address)': FunctionFragment;
    'recipient()': FunctionFragment;
    'token()': FunctionFragment;
    'start_time()': FunctionFragment;
    'end_time()': FunctionFragment;
    'cliff_length()': FunctionFragment;
    'total_locked()': FunctionFragment;
    'total_claimed()': FunctionFragment;
    'disabled_at()': FunctionFragment;
    'initialized()': FunctionFragment;
    'admin()': FunctionFragment;
    'future_admin()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'initialize'
      | 'unclaimed'
      | 'locked'
      | 'claim()'
      | 'claim(address)'
      | 'claim(address,uint256)'
      | 'rug_pull'
      | 'commit_transfer_ownership'
      | 'apply_transfer_ownership'
      | 'renounce_ownership'
      | 'collect_dust'
      | 'recipient'
      | 'token'
      | 'start_time'
      | 'end_time'
      | 'cliff_length'
      | 'total_locked'
      | 'total_claimed'
      | 'disabled_at'
      | 'initialized'
      | 'admin'
      | 'future_admin',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'initialize',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
    ],
  ): string;
  encodeFunctionData(functionFragment: 'unclaimed', values?: undefined): string;
  encodeFunctionData(functionFragment: 'locked', values?: undefined): string;
  encodeFunctionData(functionFragment: 'claim()', values?: undefined): string;
  encodeFunctionData(functionFragment: 'claim(address)', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'claim(address,uint256)',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'rug_pull', values?: undefined): string;
  encodeFunctionData(functionFragment: 'commit_transfer_ownership', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'apply_transfer_ownership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounce_ownership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'collect_dust', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'recipient', values?: undefined): string;
  encodeFunctionData(functionFragment: 'token', values?: undefined): string;
  encodeFunctionData(functionFragment: 'start_time', values?: undefined): string;
  encodeFunctionData(functionFragment: 'end_time', values?: undefined): string;
  encodeFunctionData(functionFragment: 'cliff_length', values?: undefined): string;
  encodeFunctionData(functionFragment: 'total_locked', values?: undefined): string;
  encodeFunctionData(functionFragment: 'total_claimed', values?: undefined): string;
  encodeFunctionData(functionFragment: 'disabled_at', values?: undefined): string;
  encodeFunctionData(functionFragment: 'initialized', values?: undefined): string;
  encodeFunctionData(functionFragment: 'admin', values?: undefined): string;
  encodeFunctionData(functionFragment: 'future_admin', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'unclaimed', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'locked', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claim()', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claim(address)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claim(address,uint256)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rug_pull', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'commit_transfer_ownership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'apply_transfer_ownership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounce_ownership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'collect_dust', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'recipient', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'token', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'start_time', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'end_time', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'cliff_length', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'total_locked', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'total_claimed', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'disabled_at', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialized', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'admin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'future_admin', data: BytesLike): Result;

  events: {
    'Fund(address,uint256)': EventFragment;
    'Claim(address,uint256)': EventFragment;
    'RugPull(address,uint256)': EventFragment;
    'CommitOwnership(address)': EventFragment;
    'ApplyOwnership(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Fund'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Claim'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RugPull'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'CommitOwnership'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ApplyOwnership'): EventFragment;
}

export interface FundEventObject {
  recipient: string;
  amount: BigNumber;
}
export type FundEvent = TypedEvent<[string, BigNumber], FundEventObject>;

export type FundEventFilter = TypedEventFilter<FundEvent>;

export interface ClaimEventObject {
  recipient: string;
  claimed: BigNumber;
}
export type ClaimEvent = TypedEvent<[string, BigNumber], ClaimEventObject>;

export type ClaimEventFilter = TypedEventFilter<ClaimEvent>;

export interface RugPullEventObject {
  recipient: string;
  rugged: BigNumber;
}
export type RugPullEvent = TypedEvent<[string, BigNumber], RugPullEventObject>;

export type RugPullEventFilter = TypedEventFilter<RugPullEvent>;

export interface CommitOwnershipEventObject {
  admin: string;
}
export type CommitOwnershipEvent = TypedEvent<[string], CommitOwnershipEventObject>;

export type CommitOwnershipEventFilter = TypedEventFilter<CommitOwnershipEvent>;

export interface ApplyOwnershipEventObject {
  admin: string;
}
export type ApplyOwnershipEvent = TypedEvent<[string], ApplyOwnershipEventObject>;

export type ApplyOwnershipEventFilter = TypedEventFilter<ApplyOwnershipEvent>;

export interface LlamapayVestingEscrow extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LlamapayVestingEscrowInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    initialize(
      admin: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      start_time: PromiseOrValue<BigNumberish>,
      end_time: PromiseOrValue<BigNumberish>,
      cliff_length: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    unclaimed(overrides?: CallOverrides): Promise<[BigNumber]>;

    locked(overrides?: CallOverrides): Promise<[BigNumber]>;

    'claim()'(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    'claim(address)'(
      beneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    'claim(address,uint256)'(
      beneficiary: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    rug_pull(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    commit_transfer_ownership(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    apply_transfer_ownership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    renounce_ownership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    collect_dust(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    recipient(overrides?: CallOverrides): Promise<[string]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    start_time(overrides?: CallOverrides): Promise<[BigNumber]>;

    end_time(overrides?: CallOverrides): Promise<[BigNumber]>;

    cliff_length(overrides?: CallOverrides): Promise<[BigNumber]>;

    total_locked(overrides?: CallOverrides): Promise<[BigNumber]>;

    total_claimed(overrides?: CallOverrides): Promise<[BigNumber]>;

    disabled_at(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialized(overrides?: CallOverrides): Promise<[boolean]>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    future_admin(overrides?: CallOverrides): Promise<[string]>;
  };

  initialize(
    admin: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    recipient: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    start_time: PromiseOrValue<BigNumberish>,
    end_time: PromiseOrValue<BigNumberish>,
    cliff_length: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  unclaimed(overrides?: CallOverrides): Promise<BigNumber>;

  locked(overrides?: CallOverrides): Promise<BigNumber>;

  'claim()'(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  'claim(address)'(
    beneficiary: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  'claim(address,uint256)'(
    beneficiary: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  rug_pull(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  commit_transfer_ownership(
    addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  apply_transfer_ownership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  renounce_ownership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  collect_dust(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  recipient(overrides?: CallOverrides): Promise<string>;

  token(overrides?: CallOverrides): Promise<string>;

  start_time(overrides?: CallOverrides): Promise<BigNumber>;

  end_time(overrides?: CallOverrides): Promise<BigNumber>;

  cliff_length(overrides?: CallOverrides): Promise<BigNumber>;

  total_locked(overrides?: CallOverrides): Promise<BigNumber>;

  total_claimed(overrides?: CallOverrides): Promise<BigNumber>;

  disabled_at(overrides?: CallOverrides): Promise<BigNumber>;

  initialized(overrides?: CallOverrides): Promise<boolean>;

  admin(overrides?: CallOverrides): Promise<string>;

  future_admin(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    initialize(
      admin: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      start_time: PromiseOrValue<BigNumberish>,
      end_time: PromiseOrValue<BigNumberish>,
      cliff_length: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    unclaimed(overrides?: CallOverrides): Promise<BigNumber>;

    locked(overrides?: CallOverrides): Promise<BigNumber>;

    'claim()'(overrides?: CallOverrides): Promise<void>;

    'claim(address)'(beneficiary: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    'claim(address,uint256)'(
      beneficiary: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    rug_pull(overrides?: CallOverrides): Promise<void>;

    commit_transfer_ownership(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    apply_transfer_ownership(overrides?: CallOverrides): Promise<void>;

    renounce_ownership(overrides?: CallOverrides): Promise<void>;

    collect_dust(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    recipient(overrides?: CallOverrides): Promise<string>;

    token(overrides?: CallOverrides): Promise<string>;

    start_time(overrides?: CallOverrides): Promise<BigNumber>;

    end_time(overrides?: CallOverrides): Promise<BigNumber>;

    cliff_length(overrides?: CallOverrides): Promise<BigNumber>;

    total_locked(overrides?: CallOverrides): Promise<BigNumber>;

    total_claimed(overrides?: CallOverrides): Promise<BigNumber>;

    disabled_at(overrides?: CallOverrides): Promise<BigNumber>;

    initialized(overrides?: CallOverrides): Promise<boolean>;

    admin(overrides?: CallOverrides): Promise<string>;

    future_admin(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    'Fund(address,uint256)'(recipient?: PromiseOrValue<string> | null, amount?: null): FundEventFilter;
    Fund(recipient?: PromiseOrValue<string> | null, amount?: null): FundEventFilter;

    'Claim(address,uint256)'(recipient?: PromiseOrValue<string> | null, claimed?: null): ClaimEventFilter;
    Claim(recipient?: PromiseOrValue<string> | null, claimed?: null): ClaimEventFilter;

    'RugPull(address,uint256)'(recipient?: null, rugged?: null): RugPullEventFilter;
    RugPull(recipient?: null, rugged?: null): RugPullEventFilter;

    'CommitOwnership(address)'(admin?: null): CommitOwnershipEventFilter;
    CommitOwnership(admin?: null): CommitOwnershipEventFilter;

    'ApplyOwnership(address)'(admin?: null): ApplyOwnershipEventFilter;
    ApplyOwnership(admin?: null): ApplyOwnershipEventFilter;
  };

  estimateGas: {
    initialize(
      admin: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      start_time: PromiseOrValue<BigNumberish>,
      end_time: PromiseOrValue<BigNumberish>,
      cliff_length: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    unclaimed(overrides?: CallOverrides): Promise<BigNumber>;

    locked(overrides?: CallOverrides): Promise<BigNumber>;

    'claim()'(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    'claim(address)'(
      beneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    'claim(address,uint256)'(
      beneficiary: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    rug_pull(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    commit_transfer_ownership(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    apply_transfer_ownership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    renounce_ownership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    collect_dust(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    recipient(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    start_time(overrides?: CallOverrides): Promise<BigNumber>;

    end_time(overrides?: CallOverrides): Promise<BigNumber>;

    cliff_length(overrides?: CallOverrides): Promise<BigNumber>;

    total_locked(overrides?: CallOverrides): Promise<BigNumber>;

    total_claimed(overrides?: CallOverrides): Promise<BigNumber>;

    disabled_at(overrides?: CallOverrides): Promise<BigNumber>;

    initialized(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    future_admin(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    initialize(
      admin: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      start_time: PromiseOrValue<BigNumberish>,
      end_time: PromiseOrValue<BigNumberish>,
      cliff_length: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    unclaimed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    locked(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'claim()'(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    'claim(address)'(
      beneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    'claim(address,uint256)'(
      beneficiary: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    rug_pull(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    commit_transfer_ownership(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    apply_transfer_ownership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    renounce_ownership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    collect_dust(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    recipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    start_time(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    end_time(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cliff_length(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    total_locked(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    total_claimed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    disabled_at(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    future_admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
