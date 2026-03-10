pub mod initialize;

// Re-export all items - the #[program] macro needs internal __client_accounts_* items
// Allow the warning about ambiguous handler re-exports since we call them via module::handler()
#[allow(ambiguous_glob_reexports)]
pub use initialize::*;
