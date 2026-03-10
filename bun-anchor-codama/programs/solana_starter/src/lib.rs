pub mod constants;
pub mod error;
pub mod instructions;

use anchor_lang::prelude::*;

pub use constants::*;
pub use error::ErrorCode;
pub use instructions::*;

declare_id!("3Cd4yg5VeMW1vHiNeKd7scc5AiuUjUU5C6CGZDszWxbg");

#[program]
pub mod solana_starter {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        initialize::handler(ctx)
    }
}
