use anchor_lang::prelude::*;

declare_id!("GXFtM6h99kckybSfyLBDPwh583mDKjSZqTqDYHR5ix5Z");

#[program]
pub mod hello_anchor {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
