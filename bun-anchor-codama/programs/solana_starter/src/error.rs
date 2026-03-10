use anchor_lang::prelude::*;

#[error_code]
pub enum ErrorCode {
    #[msg("Custom error message")]
    CustomError,
    #[msg("Invalid name, must be 32 characters or less.")]
    InvalidName,
    #[msg("Maximum number of nodes reached for this operator.")]
    MaxNodesReached,
    #[msg("Cannot downgrade to a lower tier client.")]
    CannotDowngrade,
    #[msg("Already at this client tier.")]
    AlreadyAtTier,
    #[msg("Insufficient TPS tokens to upgrade.")]
    InsufficientTokens,
    #[msg("No yield to harvest yet.")]
    NoYieldToHarvest,
    #[msg("Invalid node index.")]
    InvalidNodeIndex,
    #[msg("Arithmetic overflow in yield calculation.")]
    ArithmeticOverflow,
    #[msg("Unauthorized: Only the operator authority can perform this action.")]
    Unauthorized,
}
